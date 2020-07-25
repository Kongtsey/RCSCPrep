from NaiveBayesQuestionClassifier import NBimplement as nb
import pandas as pd

questionsFile = pd.read_csv("data/visionQuestions.csv")
print("Reading Questions ... ")
print("Categorising ... ")
questions = questionsFile.loc[:,'Question'].tolist()
for eachQuestions in range(len(questions)):
    category = nb.calcProbability(questions[eachQuestions])
    questionsFile.iloc[eachQuestions,0] = category
questionsFile.to_csv("data/classifiedQuestions.csv")
print("Done categorising questions. Saved as: classifiedQuestions.csv")
