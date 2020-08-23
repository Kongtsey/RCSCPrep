import classifierQuestions as cQ
import passageDivider as pD
import json as js

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# Use the application default credentials
credentialsPath = "../credentials/Credentials.json"
cred = credentials.Certificate(credentialsPath)
firebase_admin.initialize_app(cred, {
  'projectId': "bhutanexamfactory-d7ea2",
})
db = firestore.client()
def choicesSplitter(list):
    """
    Function to divide the choices as seperate elements
    :param list: a split list of the choices
    :return: temp a list which stores each choice as its element in a list tho.
    """
    choiceLetter = ["B.", "C.", "D."]  # option letters always start with this not included A. since too much trouble
    tempIndex = 1  # start from 1 to not inlclude A.
    temp = []  # accumulator variable a list to store
    for i in range(len(list)):  # Traverse the split list
        for j in range(len(choiceLetter)):  # traverse choice letters
            if list[i] == choiceLetter[j]:  # if element in the split list matches choice letters then we add everything up to that element i
                temp.append(list[tempIndex:i])
                tempIndex = i + 1  # raise the tempindex to now be above that choiceLetter
        if list[i] == "D.":  # exception case for D. since we need to add elements forward of D.
            temp.append(list[tempIndex:])
    return temp
year = input("What year is the english paper?\n")
englishPage = open("./PastPapers/Eng" + year + "_PE.txt", "r")
content = englishPage.read()
englishPassage = pD.englishPassageSplit(content)
content = content.split("\n")
# split all of the text files by new lines.

questions = []  # list to store all the questions
choices = []  # list to store all the choices
if year == str(2010) or year == str(2011):
    qNum = 1
else:
    qNum = 26  # since the questions start from number 1 in 2010 and 11 / 26 in 13
content = cQ.finder(content, 'D.',qNum)  # updates the content list to contain each question
# and choice as a single element in the list
orderedList = []  # list to store content but in a standard way
orderedList = cQ.iterator(content, cQ.reverse)  # reverses the list content
for i in range(len(orderedList)):
    questionResult = cQ.finder2(orderedList[i], 'A.',
                                qNum)  # function to find questions since some of them have new lines so are broken down as new questions.
    questions.append(questionResult)
    qNum += 1

for i in range(len(orderedList)):
    choicesResult = cQ.finder3(orderedList[i],
                               'D.')  # compiles all choices into a single list and have each choice as an element
    choices.append(choicesResult)
questionsAnswers = {  # dictionary format to store as JSON.
    "Question": "",
    "Passage": "",
    "QuestionYear":year,
    "Category":"Quantitative",
    "Choice": [],
    "CorrectAnswer":0,
    "isPassageQuestion": False,
    "UserHasNotResponded":True,
    "IsCorrectAnswer":False,
    "IsWrongAnswer":False,
    "Marked": False,
}

# ADDING THE PASSAGE TO DB
# data = js.dumps(passage, sort_keys=True,indent=4)
json_file = open('./JSONFormatQuestions/PEQuestionEnglish' + year + '.txt', 'w')
# json_file.write(data+"\n")
# db.collection("EnglishQuestions").document("passage"+year).set(passage) #adding the passage to the console

#ADDING THE QUESTIONS TO THE DB
for i in range(len(choices)):  # splitting the choices in order to seperate them
    splitList = choices[i].split()
    choices[i] = choicesSplitter(splitList)
    for y in range(len(choices[i])):
        choices[i][y] = cQ.joiner(
            choices[i][y])  # joining the elements together inside of the list since subdivided within.

for i in range(len(questions)):
    questionsAnswers["Question"] = questions[i]  # each question is stored in question
    questionsAnswers["Choice"]=choices[i] #assign the right array to the choice in form on indexes
    if (i<=4):
        questionsAnswers["Passage"] = englishPassage
        questionsAnswers["isPassageQuestion"] = True
        questionsAnswers["Category"] = "Comprehension"
    elif (i>=5 and i <=9):
        questionsAnswers["isPassageQuestion"] = False
        questionsAnswers["Category"] = "Grammar"
        questionsAnswers["Passage"] = ""
    elif (i>=10 and i<=14):
        questionsAnswers["Category"] = "Vocabulary"
    elif (i >= 15 and i <= 19):
        questionsAnswers["Category"] = "Synonyms and Antonyms"
    else:
        questionsAnswers["Category"] = "Synonyms and Antonyms"
    data = js.dumps(questionsAnswers, sort_keys=True,indent=4)  # and then choice and question are converted and process repeats.
    print("Uploading question:",i,"...")
    db.collection('EnglishQuestions').add(questionsAnswers)
    json_file.write(data + "\n")

#DONE.
json_file.close()
englishPage.close()
print("All questions have been uploaded to console. saved in JSONFormatQuestions/PEQuestionsEnglish")