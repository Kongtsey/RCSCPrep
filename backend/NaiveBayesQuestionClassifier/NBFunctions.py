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
        for eachWord in wordProbabilities[eachCategory]:
            totalProduct = totalProduct * eachWord
        map[categoryList[eachCategory]]=totalProduct
    return(map)