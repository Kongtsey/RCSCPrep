import pandas as pd  
from sklearn.feature_extraction.text import CountVectorizer
questionFile = pd.read_csv("backend/NaiveBayesQuestionClassifier/data/questions.csv")

# --> Helpers 
# print(questionFile.iloc[0])
# print(questionFile.loc[:,'Category'])
# print(questionFile.loc[questionFile.Category == "Logic"])
# questionFile['test']='success' # assigning to the table
# <-- End.

# # --> CountVectorizer for logic questions
logicDocs = questionFile.loc[questionFile.Category == "Logic",'Question']
logicVectorizer = CountVectorizer()
X_logic = logicVectorizer.fit_transform(logicDocs)
word_list_logic = logicVectorizer.get_feature_names();    
count_list_logic = X_logic.toarray().sum(axis=0) 
freq_logic = dict(zip(word_list_logic,count_list_logic))
# # --> End.

# # --> CountVectorizer for fraction questions
fractionDocs = questionFile.loc[questionFile.Category == "Fractions",'Question']
fractionVectorizer = CountVectorizer()
X_fraction = fractionVectorizer.fit_transform(fractionDocs)
word_list_fraction = fractionVectorizer.get_feature_names();    
count_list_fraction = X_fraction.toarray().sum(axis=0) 
freq_fraction = dict(zip(word_list_fraction,count_list_fraction))
# # --> End.

# # --> CountVectorizer for algebra questions
algebraDocs = questionFile.loc[questionFile.Category == "Algebra",'Question']
algebraVectorizer = CountVectorizer()
X_algebra = algebraVectorizer.fit_transform(algebraDocs)
wordListAlgebra = algebraVectorizer.get_feature_names();    
countListAlgebra = X_algebra.toarray().sum(axis=0) 
freqAlgebra = dict(zip(wordListAlgebra,countListAlgebra))
# # --> End.

# # --> CountVectorizer for comparison questions
comparisonDocs = questionFile.loc[questionFile.Category == "Comparisons",'Question']
comparisonVectorizer = CountVectorizer()
X_comparison = comparisonVectorizer.fit_transform(comparisonDocs)
wordListComparison = comparisonVectorizer.get_feature_names();    
countListComparison = X_comparison.toarray().sum(axis=0) 
freqComparison = dict(zip(wordListComparison,countListComparison))
# # --> End.

# --> CountVectorizer for percentage questions
percentageDocs = questionFile.loc[questionFile.Category == "Percentages",'Question']
percentageVectorizer = CountVectorizer()
X_percentage = percentageVectorizer.fit_transform(percentageDocs)
wordListPercentage = percentageVectorizer.get_feature_names();    
countListPercentage = X_percentage.toarray().sum(axis=0) 
freqPercentage = dict(zip(wordListPercentage,countListPercentage))
# --> End.

# # --> CountVectorizer for probability questions
probabilityDocs = questionFile.loc[questionFile.Category == "Probability",'Question']
probabilityVectorizer = CountVectorizer()
X_probability = probabilityVectorizer.fit_transform(probabilityDocs)
wordListProbability = probabilityVectorizer.get_feature_names();    
countListProbability = X_probability.toarray().sum(axis=0) 
freqProbability = dict(zip(wordListProbability,countListProbability))
# # --> End.

# --> CountVectorizer for general knowledge questions
gkDocs = questionFile.loc[questionFile.Category == "General Knowledge",'Question']
gkVectorizer = CountVectorizer()
X_gk = gkVectorizer.fit_transform(gkDocs)
wordListGk = gkVectorizer.get_feature_names();    
countListGk = X_gk.toarray().sum(axis=0) 
freqGk = dict(zip(wordListGk,countListGk))
# --> End.
