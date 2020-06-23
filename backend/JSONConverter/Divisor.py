year = input("Enter the year you want in this format: 2013 \n")
type = input("Enter which part of the paper youre tryna split. Enter 'eng' for english 'quant' for quant\n")
start = input("Enter the start word in this format -> 'SECTIONA:'.\n")
end = input("Enter the end word in this format -> 'SECTIONA:'.\n")
# print(type=="eng")
if (type=="eng"):
    engPart = open("PastPapers/Eng"+str(year)+"_PE.txt","w")
#     sectionDivider = ["SECTIONA:", "SECTION1:", "SECTIONB:","SECTION2:"]  # section divider is whats used to divide the different parts
elif (type=="quant"):
    quantPart = open("PastPapers/"+str(year)+"_PE.txt","w")
#     sectionDivider = ["SECTIONC:", "SECTION3:", "SECTIOND:", "SECTION4:"] #section divider is whats used to divide the different parts
else:
    print("invalid option")
    exit()
peTxtFile = open("PastPapers/BCSE-"+str(year)+"-PE.txt","r")
peTxtFileList = peTxtFile.readlines()
reachedSection = False
for eachline in peTxtFileList:
    wordList = eachline.split()
    print(wordList)
    try:
        wordToCheck = wordList[0]+wordList[1]
        if (wordToCheck == start):
            reachedSection = True
        if (wordToCheck== end):
            reachedSection = False
        if reachedSection == True:
            if type =="eng":
                engPart.write(eachline)
            elif type == "quant":
                quantPart.write(eachline)
    except:
        pass
if type == "eng":
    engPart.close()
    print("Finished writing the questions and saved in PastPapers as: " + "Eng" + str(year) + "_PE.txt")
elif type == "quant":
    quantPart.close()
    print("Finished writing the questions and saved in PastPapers as: "+str(year)+"_PE.txt")
peTxtFile.close()
