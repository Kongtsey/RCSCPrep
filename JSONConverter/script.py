import classifierQuestions as cQ
import json as js
prblmSlvPage = open("PastPapers/2010_PE.txt","r")
content = prblmSlvPage.read()
content = content.split("\n")
questions = []
choices = []
content = cQ.remover(content,"")
qNum = 51
content = cQ.finder(content,'D.',qNum)
orderedList = []
orderedList = cQ.iterator(content, cQ.reverse)
for i in range(len(orderedList)):
    questionResult = cQ.finder2(orderedList[i],'A.',qNum)
    if questionResult[1]==True:
        questions.append(questionResult[0])
        qNum+=1
questions = cQ.iterator(questions, cQ.reverse)
questions = cQ.iterator(questions, cQ.joiner)
for i in range(len(orderedList)):
    choicesResult = cQ.finder3(orderedList[i], 'D.')
    choices.append(choicesResult)
choices = cQ.iterator(choices,cQ.reverse)

# Time to convert into a dictionary
questionsAnswers = {
    "questions":{},
    "choices":{}
}
for i in range(len(choices)):
    questionsAnswers["questions"][i+1]=questions[i]
    questionsAnswers["choices"][i+1]=choices[i]
print(questionsAnswers)
