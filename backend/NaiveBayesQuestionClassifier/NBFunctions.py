import pandas as pd
def bayesWordProb(wordList, wordFreq,totalFeatures, totalCntInClass):
    """
    Function to return the property of each word.
    :param wordList: the list of words in the question to check for
    :param wordFreq: frequency of words appearing in category in the training data
    :param totalFeatures: total number of unique words in the training data
    :param totalCntInClass: total counts of words in the class
    :return: bayesWordProb a list with probabilities of each word appearing in the category
    """
    bayesWordProb = []
    for word in wordList:
        if word in wordFreq.keys():
            count = wordFreq[word]
        else:
            count = 0
        bayesWordProb.append((count+1)/(totalCntInClass + totalFeatures))
    return(bayesWordProb)

def probProduct(categoryList, wordProbabilities, map):
    """
    Function to get the total product of a sentence being in a certain category
    :param categoryList: list of all question categories
    :param wordProbabilities: Probabilities of each word being in a category
    :param map: an empty dictionary
    :return: map contains categories as keys and the probabilities as values
    """
    for eachCategory in range(len(categoryList)):
        totalProduct = 1
        # print(categoryList[eachCategory])
        # print(wordProbabilities[eachCategory])
        for eachWord in wordProbabilities[eachCategory]:
            totalProduct = totalProduct * eachWord
        map[categoryList[eachCategory]]=totalProduct
    return(map)

def stopWordRemoval(question):
    """
    Function to remove stopwords from a question
    :param question: question to have stopwords removed
    :return: filteredQuestion - question without stopwords
    """
    question = question.split()
    filteredQuestion = ""
    for eachWord in question:
        if eachWord not in stopwords:
            filteredQuestion+= " "+eachWord
    return (filteredQuestion)

#filter training data
stopwords = ["yourself", "but" ,"there","they","an", "be","for", "do", "its", "yours", "of", "is", "am", "or", "as",
             "the","themselves","are","we", "these","me","this","their", "ours", "she","at","and","in", "on","then", "that",
             "so","he", "you", "i","my","a","it","than","was"]

questionsFile = pd.read_csv("./data/Questions.csv")
questions = questionsFile.loc[:,'Question']
questionsList = list(questions)
filteredQuestions = []

for eachQuestion in range(len(questions)):
    filteredQuestion = ""
    question = questionsList[eachQuestion]
    question = question.lower()
    question = question.split()
    for eachWord in question:
        if eachWord not in stopwords:
            filteredQuestion+=" "+eachWord
    questionsFile.iloc[eachQuestion,1] = filteredQuestion
questionsFile.to_csv("./data/filtratedTrainingQuestions.csv")
# <-- End.