import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import pandas as pd

# EXCEEDED AT DTASHI505@gmail.com
print("Connecting to DB ... ")
credential = credentials.Certificate("../credentials/Credentials.json")
firebase_admin.initialize_app(credential)
db = firestore.client()
print("----------------------------------------------------------------")
# englishDocs = db.collection("admin@gmail.com").document("EnglishQuestions").collection("Questions").stream()
with open('englishDocIDs.txt', 'r') as englishDocIDs:
    englishDocIDsText = englishDocIDs.read()
    englishDocIDsText = englishDocIDsText.split('\n')
with open('mathDocIDs.txt', 'r') as mathDocIDs:
    mathDocIDsText = mathDocIDs.read()
    mathDocIDsText = mathDocIDsText.split("\n")
englishDocsRef = db.collection("admin@gmail.com").document("EnglishQuestions").collection("Questions")
mathDocsRef = db.collection("admin@gmail.com").document("MathQuestions").collection("Questions")
data = pd.read_csv("./emails.csv")
df = pd.DataFrame(data=data)
with open('errUserDbs', 'w') as errDBs:
    for eachUser in range(2, len(df)):
        userEmail = (df.iloc[eachUser][0])
        print(userEmail + "'s collection")
        for eachEnglishDocID in englishDocIDsText:
            userRef = db.collection(userEmail).document("EnglishQuestions").collection("Questions").document(
                eachEnglishDocID)
            doc = userRef.get()
            if doc.exists:
                print("Setting up", doc.id, " fields")
                userRef.set({
                    u'explanationURL': "",
                    u'futureOption': "",
                    u'futureOption1': "",
                    u'futureOption2': "",
                    u'futureOption3': "",
                    u'futureOption4': ""
                }, merge=True)
            else:
                errDBs.write(userEmail+"\n")
# for eachDocID in englishDocIDsText:
#     print("Setting up:",eachDocID,"document")
#     englishDocsRef.document(eachDocID).set({
#         u'explanationURL': "",
#         u'futureOption': "",
#         u'futureOption1': "",
#         u'futureOption2': "",
#         u'futureOption3': "",
#         u'futureOption4': ""
#
#     }, merge=True)
# for eachDocID in mathDocIDsText:
#     print("Setting up:", eachDocID,"document")
#     mathDocsRef.document(eachDocID).set({
#         u'explanationURL': "",
#         u'futureOption': "",
#         u'futureOption1': "",
#         u'futureOption2': "",
#         u'futureOption3': "",
#         u'futureOption4': ""
#     }, merge=True)
print("Processes done! 😉")
