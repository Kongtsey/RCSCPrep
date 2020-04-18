year = 2011
peTxtFile = open("PastPapers/BCSE-"+str(year)+"-PE.txt","r")
quantPart = open("PastPapers/"+str(year)+"_PE.txt","w")
peTxtFileList = peTxtFile.readlines()
word = ["SECTIONC:","SECTION3:","SECTIOND:","SECTION4:"]
reachedSection = False
for eachline in peTxtFileList:
    wordList = eachline.split()
    try:
        wordToCheck = wordList[0]+wordList[1]
        if (wordToCheck == word[0] or wordToCheck == word[1]):
            reachedSection = True
        if (wordToCheck==word[2] or wordToCheck==word[3]):
            reachedSection = False
        if reachedSection == True:
            quantPart.write(eachline)
    except:
        pass
quantPart.close()
peTxtFile.close()
