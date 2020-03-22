import classifierQuestions as cQ
import json as js
prblmSlvPage = open("PastPapers/2010_PE.txt","r")
content = prblmSlvPage.read()
content = content.split("\n")
# split all of the text files by new lines.
questions = [] # list to store all the questions
choices = [] # list to store all the choices
content = cQ.remover(content,"") # removes the blank elements in the content list
qNum = 51 # since the questions start from number 51
content = cQ.finder(content,'D.',qNum) # updates the content list to contain each question and choice as a single element in the list
orderedList = [] # list to store content but in a standard way
orderedList = cQ.iterator(content, cQ.reverse) # reverses the list content
for i in range(len(orderedList)):
    questionResult = cQ.finder2(orderedList[i],'A.',qNum)# function to find questions since some of them have new lines so are broken down as new questions.
    questions.append(questionResult)
    qNum+=1
questions = cQ.iterator(questions, cQ.reverse) # just reverses in order to have it in ascending order
questions = cQ.iterator(questions, cQ.joiner) # combines each part of the question as a whole since some are broken down due to txt errors
for i in range(len(orderedList)):
    choicesResult = cQ.finder3(orderedList[i],'D.') # compiles all choices into a single list and have each choice as an element
    choices.append(choicesResult)
choices = cQ.iterator(choices,cQ.reverse)

# Time to convert into a dictionary
questionsAnswers = {
    "questions":"",
    "choices":""
}
json_file = open('JSONFormatQuestions/PEQuestion.txt','w')
for i in range(len(choices)):
    questionsAnswers["questions"]=questions[i]
    questionsAnswers["choices"]=choices[i]
    data = js.dumps(questionsAnswers)
    json_file.write(data+"\n")
json_file.close()