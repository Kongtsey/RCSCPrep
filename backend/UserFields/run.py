import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import pandas as pd
import os

def databaseSetUp(userEmail, category, docIDs):
    """

    :param userEmail: the user email to set up in the db
    :param docIDs: the list of IDs for the category: either math or english
    :param category: the question category either EnglishQuestions or MathQuestions
    :return:
    """
    dbError = False
    with open('errUserDbs.txt', 'a+') as errDBs:
        for eachDocId in docIDs:
            userRef = db.collection(userEmail).document(category).collection("Questions").document(
                eachDocId)
            doc = userRef.get()
            if doc.exists:
                print("Setting Up", doc.id, 'fields')
                userRef.set({
                    u'explanationURL': "",
                }, merge=True)
            else:
                dbError = True
        if dbError:
            errDBs.write(userEmail + "\n")


print('connecting to db')
credential = credentials.Certificate("../credentials/Credentials.json")
firebase_admin.initialize_app(credential)
db = firestore.client()
with open('englishDocIDs.txt', 'r') as englishDocIDs:
    englishDocIDsText = englishDocIDs.read()
    englishDocIDsText = englishDocIDsText.split('\n')
with open('mathDocIDs.txt', 'r') as mathDocIDs:
    mathDocIDsList = mathDocIDs.read().split('\n')
data = pd.read_csv("./emails.csv")
df = pd.DataFrame(data=data)
for eachUser in range(50,80):
    userEmail = (df.iloc[eachUser][0])
    print("------------------------------------------")
    print(userEmail + "'s collection")
    print("------------------------------------------")
    dbError = False
    databaseSetUp(userEmail, "MathQuestions", mathDocIDsList)
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
# for eachEnglishDocID in englishDocIDsText:
#     userRef = db.collection(userEmail).document("EnglishQuestions").collection("Questions").document(
#         eachEnglishDocID)
#     doc = userRef.get()
#     if doc.exists:
#         print("Setting up", doc.id, " fields")
#         userRef.set({
#             u'explanationURL': "",
#             u'futureOption': "",
#             u'futureOption1': "",
#             u'futureOption2': "",
#             u'futureOption3': "",
#             u'futureOption4': ""
#         }, merge=True)
#     else:
#         dbError = True
# if dbError:
#     errDBs.write(userEmail + "\n")
os.system('say "Your processes have been completed! dickhead"')
print("Processes done! 😉")
