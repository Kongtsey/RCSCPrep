import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import pandas as pd
import os


def urlDBWrite(userEmail, category, docID, imgLink):
    """

    :param userEmail: the user email to set up in the db
    :param docIDs: the list of IDs for the category: either math or english
    :param category: the question category either EnglishQuestions or MathQuestions
    :return:
    """
    dbError = False
    with open('errUserDbs2809.txt', 'a+') as errDBs:
            userRef = db.collection(userEmail).document(category).collection("Questions").document(
                docID)
            doc = userRef.get()
            if doc.exists:
                print("Setting Up", doc.id, 'fields')
                userRef.set({
                    u'explanationURL': str(imgLink),
                }, merge=True)
            else:
                dbError = True
    if dbError:
        errDBs.write(userEmail + "\n")


def databaseSetUp(userEmail, category, docIDs):
    """

    :param userEmail: the user email to set up in the db
    :param docIDs: the list of IDs for the category: either math or english
    :param category: the question category either EnglishQuestions or MathQuestions
    :return:
    """
    dbError = False
    with open('errUserDbs2809.txt', 'a+') as errDBs:
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


def mathDBSetUp():
    with open('englishDocIDs.txt', 'r') as englishDocIDs:
        englishDocIDsText = englishDocIDs.read()
        englishDocIDsText = englishDocIDsText.split('\n')
    with open('mathDocIDs.txt', 'r') as mathDocIDs:
        mathDocIDsList = mathDocIDs.read().split('\n')
    data = pd.read_csv("./userEmails2809clean.csv")
    df = pd.DataFrame(data=data)
    for eachUser in range(95, 122):
        userEmail = (df.iloc[eachUser][0])
        print("------------------------------------------")
        print(userEmail + "'s collection")
        print("------------------------------------------")
        dbError = False
        databaseSetUp(userEmail, "MathQuestions", mathDocIDsList)
    os.system('say "Woof Woof Woof"')
    print("Processes done! 😉")


def imageLinkSet():
    imgLinks = pd.read_csv("./imgLinks.csv")
    imgLinksDF = pd.DataFrame(imgLinks)
    for eachQuestion in range(len(imgLinksDF)):
        docID = imgLinksDF.iloc[eachQuestion][0]
        docImgLink = imgLinksDF.iloc[eachQuestion][1]
        urlDBWrite('admin@gmail.com', 'MathQuestions', docID, docImgLink)
    print("Done")


print('connecting to db')
credential = credentials.Certificate("../credentials/Credentials.json")
firebase_admin.initialize_app(credential)
db = firestore.client()
imageLinkSet()
