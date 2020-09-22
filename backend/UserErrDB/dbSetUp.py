import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import pandas as pd

print("Connecting to DB ...")
credential = credentials.Certificate("../credentials/Credentials.json")
firebase_admin.initialize_app(credential)
db = firestore.client()
print("---------------------------------------------------------------")

# with open('../UserFields/errUserDbs.txt','r') as erredUsers:
# users = erredUsers.read().split("\n")
# for eachUser in users:
#     userRef = db.collection(eachUser).document("EnglishQuestions").collection("Questions")
questionData = {'qID': [], 'Category': [], 'Choice': [], 'CorrectAnswer': [], 'IsCorrectAnswer': [], 'Marked': [],
                'Passage': [], 'Question': [], 'UserHasNotResponded': [], 'explanationURL': [], 'futureOption': [],
                'futureOption1': [], 'futureOption2': [], 'futureOption3': [], 'futureOption4': []}
englishDocs = db.collection('EnglishQuestions').stream()
count = 0
for eachDoc in englishDocs:
    count += 1
    print("Copying doc id:",eachDoc.id)
    eachDocDic = eachDoc.to_dict()
    questionData['qID'].append(eachDoc.id)
    questionData['Category'].append(eachDocDic['Category'])
    questionData['Choice'].append(eachDocDic['Choice'])
    questionData['CorrectAnswer'].append(eachDocDic['CorrectAnswer'])
    questionData['IsCorrectAnswer'].append(eachDocDic['IsCorrectAnswer'])
    questionData['Marked'].append(eachDocDic['Marked'])
    questionData['Passage'].append(eachDocDic['Passage'])
    questionData['Question'].append(eachDocDic['Question'])
for eachDoc in range(count):
    questionData['UserHasNotResponded'].append(True)
    questionData['explanationURL'].append("")
    questionData['futureOption'].append("")
    questionData['futureOption1'].append("")
    questionData['futureOption2'].append("")
    questionData['futureOption3'].append("")
    questionData['futureOption4'].append("")
df = pd.DataFrame(questionData)
df.to_csv('EnglishQuestions.csv')
print("Data Saved as EnglishQuestions.csv")
