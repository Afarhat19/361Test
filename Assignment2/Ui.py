import sys
import time

while True:
    print('Please enter a number')
    userinput = int(input())
    if userinput == 1:
        openfile = open('prng-service.txt', 'w')
        openfile.write("run")
        openfile.close()
        time.sleep(10)
        openfile = open('prng-service.txt', 'r')
        randomnum = openfile.read()
        openimagefile = open("image-service.txt", 'w')
        openimagefile.write(randomnum)
        openimagefile.close()
        time.sleep(10)
        readimageoutput = open('image-service.txt', 'r')
        filepath = readimageoutput.read()
        print(f"Filepath is {filepath}")

        openimagefile.close()
        openfile.close()
        readimageoutput.close()
    elif userinput == 2:
        sys.exit()
    else:
        print("unknown option")