allQuestionsFile = open("JSONFormatQuestions/allQuestionsJSON.txt","w")
compatibleYears = [2010,2011,2013]
year = 2010
for i in range(4):
    year=year+i
    if year in compatibleYears:
        file = open("JSONFormatQuestions/PEQuestion"+str(year)+".txt","r")
        fileContent = file.read()
        allQuestionsFile.write(fileContent)
        file.close()
allQuestionsFile.close()