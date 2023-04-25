import time
import random

while True:
    prngFile = open('prng-service.txt', 'r+')
    read = prngFile.readline()
    if read == "run":
        time.sleep(3) # changed from 1
        randomnumber = str(random.randint(1, 100))
        prngFile.close()
        text = open('prng-service.txt', 'w').close()
        prngFile = open('prng-service.txt', 'w')
        #write_to_file = open('prng-service.txt', 'a')
        prngFile.write(randomnumber)
    prngFile.close()

