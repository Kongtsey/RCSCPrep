from NaiveBayesQuestionClassifier import NBimplement as nb
import pandas as pd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
credentialsPath = "../../backend/credentials/Credentials.json"
cred = credentials.Certificate(credentialsPath)
firebase_admin.initialize_app(cred, {
  'projectId': "bhutanexamfactory-d7ea2",
})
db = firestore.client()
def categorise():
    questionsFile = pd.read_csv("data/visionQuestions.csv")
    print("Reading Questions ... ")
    print("Categorising ... ")
    questions = questionsFile.loc[:,'Question'].tolist()
    for eachQuestions in range(len(questions)):
        category = nb.calcProbability(questions[eachQuestions])
        questionsFile.iloc[eachQuestions,0] = category
    questionsFile.to_csv("data/classifiedQuestions.csv")
    print("Done categorising questions. Saved as: classifiedQuestions.csv")

#Upload to DB
def upload(filePath):
    try:
        questionsFile = pd.read_csv(filePath)
    except:
        print("Enter a valid csv file path")
        exit()
    jsonFormatQuestion = {
        "Question": "",
        "Category": "",
        "Choice": [],
        "CorrectAnswer": 0,
        "Marked": False,
        "UserHasNotResponded": True,
        "IsWrongAnswer": False,
        "IsCorrectAnswer": False
    }
    for index, row in questionsFile.iterrows():
        jsonFormatQuestion["Question"] = row["Question"]
        jsonFormatQuestion['Category'] = row['Category']
        choiceRowHeader = ['Choice__001','Choice__002','Choice__003','Choice__004']
        for eachChoiceHeader in choiceRowHeader:
            jsonFormatQuestion['Choice'].append(row[eachChoiceHeader])
        print("Uploading question:",index,"...")
        db.collection('Questions').add(jsonFormatQuestion)
        # print(jsonFormatQuestion)
        jsonFormatQuestion['Choice']=[]
    print("Fin uploading questions to db.")
#End.
upload("./data/jsonUploadData.csv")
# upload("./data/classfiedQuestionsForUpload.csv")