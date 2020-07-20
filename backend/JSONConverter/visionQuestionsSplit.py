import visionQuestionsClassfier as questionClassifier
import classifierQuestions as cq
import json as js

#--> Firebase Setup
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# Use the application default credentials
cred = credentials.Certificate("backend/credentials/Credentials.json")
firebase_admin.initialize_app(cred, {
  'projectId': "bhutanexamfactory-d7ea2",
})
db = firestore.client()
# <-- End.

def splitChoices(list):
    """
    Function to divide the choices as seperate elements
    :param list: a split list of the choices
    :return: temp a list which stores each choice as its element in a list tho.
    """
    choiceLetter = ["B.", "C.", "D."]  # option letters always start with this not included A. since too much trouble
    tempIndex = 1  # start from 1 to not inlclude A.
    temp = []  # accumulator variable a list to store
    for i in range(len(list)): 
        for j in range(len(choiceLetter)):
            if list[i] == choiceLetter[
                j]:  # if element in the split list matches choice letters then we add everything up to that element i
                temp.append(list[tempIndex:i])
                tempIndex = i + 1  # raise the tempindex to now be above that choiceLetter
        if list[i] == "D.":  # exception case for D. since we need to add elements forward of D.
            temp.append(list[tempIndex:])
    return temp

# ---> Splitting the text to have just choices and the questions
questionTxt = open("backend/tesseract/visionQuestions/questionV2.txt")
questionText = questionTxt.read()
splitQuestionText = questionText.split("\n")
questions = []
choices = []
splitQuestionText = questionClassifier.finder(splitQuestionText,'D.')
# <---- End

splitQuestionText = cq.iterator(splitQuestionText, cq.reverse)
for eachQuestion in range(len(splitQuestionText)):
    aQuestion = questionClassifier.extractQuestions(splitQuestionText[eachQuestion],'A.')
    questions.append(aQuestion)

for eachQuestion in range(len(splitQuestionText)):
    theChoices = cq.finder3(splitQuestionText[eachQuestion],'D.')
    choices.append(theChoices)


# --> To remove duplicates    
questions = list(dict.fromkeys(questions))
choices = list(dict.fromkeys(choices))
# <-- End.

# ---> For debugging
# print("length of questions and choices",len(splitQuestionText))
# print("length of questions", len(questions))
# print("\n The Questions \n")
# for each in questions:
#     print("\n",each)
# print("\n The choices for the question: \n")
# for everyChoices  in choices:
#     print("\n ",everyChoices)
#<-- End.

# --> JSON format data
jsonFormatData = {
    "Question": "",
    "Category":"Quantitative",
    "Choice": [],
    "CorrectAnswer":0,
    "Marked": False,
    "UserHasResponded":False,
    "IsAnswerCorrect":False
}
# <-- End.

question_file = open('backend/JSONConverter/JSONFormatQuestions/VisionQuestionJSONV2.txt', 'a')

#--> Splitting the choices make each one a seperate element
for choicesForEachQ in range(len(choices)):
    aChoiceList = choices[choicesForEachQ].split()
    choices[choicesForEachQ] = splitChoices(aChoiceList)
    for y in range(len(choices[choicesForEachQ])):
        choices[choicesForEachQ][y] = cq.joiner(
            choices[choicesForEachQ][y])  # joining the elements together inside of the list since subdivided within.
#<-- End.

for eachQuestionAndChoice in range(len(questions)):
    jsonFormatData["Question"] = questions[eachQuestionAndChoice]
    jsonFormatData["Choice"] = choices[eachQuestionAndChoice]
    print("Uploading question", eachQuestionAndChoice+1,"of",len(questions))
    db.collection('visionQuestions').add(jsonFormatData)
    data = js.dumps(jsonFormatData, sort_keys=True, indent=4)
    question_file.write(data+"\n")
question_file.close()
questionTxt.close()
print("All questions have been uploaded to the console. The txt file has been save in the folder 'JSONConverter/JSONFormatQuestions.'")