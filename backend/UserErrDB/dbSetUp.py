import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import pandas as pd
import numpy as np
import os

print("Connecting to DB ...")
credential = credentials.Certificate("../credentials/Credentials.json")
firebase_admin.initialize_app(credential)
db = firestore.client()
print("---------------------------------------------------------------")

# with open('../UserFields/errUserDbs.txt','r') as erredUsers:
# users = erredUsers.read().split("\n")
# for eachUser in users:
#     userRef = db.collection(eachUser).document("EnglishQuestions").collection("Questions")
# print("Data Saved as EnglishQuestions.csv")
# questionData = {'qID': [], 'Category': [], 'Choice': [], 'CorrectAnswer': [], 'IsCorrectAnswer': [], 'Marked': [],
#                 'Passage': [], 'Question': [], 'UserHasNotResponded': [], 'explanationURL': [], 'futureOption': [],
#                 'futureOption1': [], 'futureOption2': [], 'futureOption3': [], 'futureOption4': []}
# englishDocs = db.collection('EnglishQuestions').stream()
# count = 0
# for eachDoc in englishDocs:
#     count += 1
#     print("Copying doc id:",eachDoc.id)
#     eachDocDic = eachDoc.to_dict()
#     questionData['qID'].append(eachDoc.id)
#     questionData['Category'].append(eachDocDic['Category'])
#     questionData['Choice'].append(eachDocDic['Choice'])
#     questionData['CorrectAnswer'].append(eachDocDic['CorrectAnswer'])
#     questionData['IsCorrectAnswer'].append(eachDocDic['IsCorrectAnswer'])
#     questionData['Marked'].append(eachDocDic['Marked'])
#     questionData['Passage'].append(eachDocDic['Passage'])
#     questionData['Question'].append(eachDocDic['Question'])
# for eachDoc in range(count):
#     questionData['UserHasNotResponded'].append(True)
#     questionData['explanationURL'].append("")
#     questionData['futureOption'].append("")
#     questionData['futureOption1'].append("")
#     questionData['futureOption2'].append("")
#     questionData['futureOption3'].append("")
#     questionData['futureOption4'].append("")
# df = pd.DataFrame(questionData)
# df.to_csv('EnglishQuestions.csv')
# print("Data Saved as EnglishQuestions.csv")
with open('../UserFields/errUserDbs0810.txt') as users:
    usersList = users.read().split('\n')
with open('./MathQuestions.csv') as mathCSV:
    mathQuestions = pd.read_csv(mathCSV)
    mathQDf = pd.DataFrame(mathQuestions)
    for eachUser in range(0, 4):
        print("Setting up: ", usersList[eachUser])
        print("-------------------------------------------")
        question = {'Category': "", 'Choice': [], 'CorrectAnswer': -1, 'IsCorrectAnswer': False, 'IsWrongAnswer': False,
                    'Marked': False, 'Question': "", 'UserHasNotResponded': "", 'explanationURL': ""}
        questionDataIndexes = ['qID', 'Category', 'Choice', 'CorrectAnswer', 'IsCorrectAnswer', 'IsWrongAnswer',
                               'Marked',
                               'Question', 'UserHasNotResponded']
        for eachQuestion in range(len(mathQDf)):
            choicesStr = mathQDf.iloc[eachQuestion][2]
            choicesArr = choicesStr.strip("][").split(', ')
            for eachChoice in range(len(choicesArr)):
                choicesArr[eachChoice] = choicesArr[eachChoice][1:len(choicesArr[eachChoice]) - 1]
            if len(choicesArr) != 4:
                print('something wrong at', mathQDf.iloc[eachQuestion][0])
            questionDoc = db.collection(usersList[eachUser]).document("MathQuestions").collection(
                "Questions").document(mathQDf.iloc[eachQuestion][0])
            for eachDataPoint in range(1, len(questionDataIndexes)):
                if eachDataPoint == 2:
                    question['Choice'] = choicesArr
                else:
                    question[questionDataIndexes[eachDataPoint]] = mathQDf.iloc[eachQuestion][eachDataPoint]
                if type(question[questionDataIndexes[eachDataPoint]]) == np.int64:
                    question[questionDataIndexes[eachDataPoint]] = int(question[questionDataIndexes[eachDataPoint]])
                if type(question[questionDataIndexes[eachDataPoint]]) == np.bool_:
                    question[questionDataIndexes[eachDataPoint]] = bool(question[questionDataIndexes[eachDataPoint]])
            print("setting up: ", mathQDf.iloc[eachQuestion][0])
            questionDoc.set(question, merge=True)
os.system('say "MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!"')