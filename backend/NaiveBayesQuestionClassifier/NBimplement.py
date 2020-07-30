import pandas as pd
from NaiveBayesQuestionClassifier import NBFunctions
from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import word_tokenize

print("Reading Training data ... ")
questionFile = pd.read_csv("data/filtratedTrainingQuestions.csv")

# --> Helpers 
# print(questionFile.iloc[0])
# print(questionFile.loc[:,'Category'])
# print(questionFile.loc[questionFile.Category == "Logic"])
# questionFile['test']='success' # assigning to the table
# <-- End.

def wordProbability(wordList, countList):
    probWords = []
    for eachWord, count in zip(wordList, countList):
        probWords.append(count/len(wordList))
    return(dict(zip(wordList, probWords)))

print("Training NB algo")
questionDocs = questionFile.loc[:,'Question']
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(questionDocs)
totalFeatures = len(vectorizer.get_feature_names())

# # --> CountVectorizer for logic questions
logicDocs = questionFile.loc[questionFile.Category == "Logic",'Question']
logicVectorizer = CountVectorizer()
X_logic = logicVectorizer.fit_transform(logicDocs)
word_list_logic = logicVectorizer.get_feature_names();    
count_list_logic = X_logic.toarray().sum(axis=0) 
freqLogic = dict(zip(word_list_logic,count_list_logic))
logicWordsProb = wordProbability(word_list_logic, count_list_logic)
totalCntLogic = count_list_logic.sum(axis=0)
# print(logicWordsProb)
# # --> End.

# # --> CountVectorizer for fraction questions
fractionDocs = questionFile.loc[questionFile.Category == "Fractions",'Question']
fractionVectorizer = CountVectorizer()
X_fraction = fractionVectorizer.fit_transform(fractionDocs)
word_list_fraction = fractionVectorizer.get_feature_names();    
count_list_fraction = X_fraction.toarray().sum(axis=0) 
freqFraction = dict(zip(word_list_fraction,count_list_fraction))
fractionWordsProb = wordProbability(word_list_fraction, count_list_fraction)
totalCntFraction = count_list_fraction.sum(axis=0)
# print(fractionWordsProb)
# # --> End.

# # --> CountVectorizer for algebra questions
algebraDocs = questionFile.loc[questionFile.Category == "Algebra",'Question']
algebraVectorizer = CountVectorizer()
X_algebra = algebraVectorizer.fit_transform(algebraDocs)
wordListAlgebra = algebraVectorizer.get_feature_names();    
countListAlgebra = X_algebra.toarray().sum(axis=0) 
freqAlgebra = dict(zip(wordListAlgebra,countListAlgebra))
algebraWordsProb = wordProbability(wordListAlgebra, countListAlgebra)
totalCntAlgebra = countListAlgebra.sum(axis=0)
# # --> End.

# # --> CountVectorizer for comparison questions
comparisonDocs = questionFile.loc[questionFile.Category == "Comparisons",'Question']
comparisonVectorizer = CountVectorizer()
X_comparison = comparisonVectorizer.fit_transform(comparisonDocs)
wordListComparison = comparisonVectorizer.get_feature_names();
countListComparison = X_comparison.toarray().sum(axis=0)
freqComparison = dict(zip(wordListComparison,countListComparison))
comparisonWordsProb = wordProbability(wordListComparison, countListComparison)
totalCntComparison = countListComparison.sum(axis=0)
# # --> End.

# --> CountVectorizer for percentage questions
percentageDocs = questionFile.loc[questionFile.Category == "Percentages",'Question']
# print(percentageDocs)
percentageVectorizer = CountVectorizer()
X_percentage = percentageVectorizer.fit_transform(percentageDocs)
wordListPercentage = percentageVectorizer.get_feature_names();    
countListPercentage = X_percentage.toarray().sum(axis=0) 
freqPercentage = dict(zip(wordListPercentage,countListPercentage))
percentageWordsProb = wordProbability(wordListPercentage, countListPercentage)
totalCntPercentage = countListPercentage.sum(axis=0)
# --> End.

# # --> CountVectorizer for probability questions
probabilityDocs = questionFile.loc[questionFile.Category == "Probability",'Question']
probabilityVectorizer = CountVectorizer()
X_probability = probabilityVectorizer.fit_transform(probabilityDocs)
wordListProbability = probabilityVectorizer.get_feature_names();    
countListProbability = X_probability.toarray().sum(axis=0) 
freqProbability = dict(zip(wordListProbability,countListProbability))
probabilityWordsProb = wordProbability(wordListProbability, countListProbability)
totalCntProbability = countListProbability.sum(axis=0)
# # --> End.

# --> CountVectorizer for general knowledge questions
gkDocs = questionFile.loc[questionFile.Category == "General Knowledge",'Question']
gkVectorizer = CountVectorizer()
X_gk = gkVectorizer.fit_transform(gkDocs)
wordListGk = gkVectorizer.get_feature_names()
countListGk = X_gk.toarray().sum(axis=0)
freqGk = dict(zip(wordListGk,countListGk))
gkWordsProb = wordProbability(wordListGk, countListGk)
totalCntGk = countListGk.sum(axis=0)
# --> End.

# <-- Naive Bayes Function
categoryList = ['Logic','Fraction','Algebra','Comparison','Percentage','Probability','Gk']

def calcProbability(question):
    """
    Function to calcuate probability of question being in a certain category
    :param question: question to calculate probability of
    :return: maxProbCategory category with the highest probability.
    """
    # print("Classifying Question:",question)
    question = NBFunctions.stopWordRemoval(question)
    wordList = word_tokenize(question)
    wordProbabilities = []
    for eachCategory in categoryList:
        if eachCategory == "Logic":
            probWordInCategory = NBFunctions.bayesWordProb(wordList, freqLogic, totalCntLogic, totalFeatures)
        elif eachCategory == "Fraction":
            probWordInCategory = NBFunctions.bayesWordProb(wordList, freqFraction, totalCntFraction, totalFeatures)
        elif eachCategory == "Algebra":
            probWordInCategory = NBFunctions.bayesWordProb(wordList, freqAlgebra, totalCntAlgebra, totalFeatures)
        elif eachCategory == "Comparison":
            probWordInCategory = NBFunctions.bayesWordProb(wordList, freqComparison, totalCntComparison, totalFeatures)
        elif eachCategory == "Percentage":
            probWordInCategory = NBFunctions.bayesWordProb(wordList, freqPercentage, totalCntPercentage, totalFeatures)
        elif eachCategory == "Probability":
            probWordInCategory = NBFunctions.bayesWordProb(wordList, freqProbability, totalCntProbability, totalFeatures)
        elif eachCategory=="Gk":
            probWordInCategory = NBFunctions.bayesWordProb(wordList, freqGk, totalCntGk, totalFeatures)
        wordProbabilities.append(probWordInCategory)

    probabilityMap = {}
    probabilityMap = NBFunctions.probProduct(categoryList, wordProbabilities, probabilityMap)
    maxProbCategory = max(probabilityMap, key=probabilityMap.get)
    return (maxProbCategory)
# --> End.
trialQuestion = "Write the next term of the series below: 1, 1, 2, 4, 3, 9, 4 _ _ _"
print(calcProbability(trialQuestion))
# wordList = word_tokenize(question)R
# NBFunctions.bayesWordProb(wordList,freqGk, totalCntGk,totalFeatures)
# NBFunctions.bayesWordProb(wordList,freqLogic, totalCntGk,totalFeatures)