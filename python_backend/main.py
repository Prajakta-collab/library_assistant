
import pyttsx3
import speech_recognition as sr
import datetime
import wikipedia
import os

import shutil

import pandas as pd

df = pd.read_csv(r"D:\library_assistant2\dataset\book_dataset.csv")
df = df.apply(lambda x: x.astype(str).str.lower())

engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour >= 0 and hour < 12:
        speak("Good Morning!")

    elif hour >= 12 and hour < 18:
        speak("Good Afternoon!")

    else:
        speak("Good Evening!")

    assname = ("Marnie")
    speak("I am your Assistant")
    speak(assname)


def username():
    speak("What should I call you?")
    uname = takeCommand()
    speak("Welcome!")
    speak(uname)
    columns = shutil.get_terminal_size().columns

    print("#####################".center(columns))
    print("Welcome ", uname.center(columns))
    print("#####################".center(columns))

    speak("How can I help you?")


def takeCommand():
    r = sr.Recognizer()

    with sr.Microphone() as source:

        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n")

    except Exception as e:
        print(e)
        print("Unable to Recognize your voice.")
        return "None"

    return query


if __name__ == '__main__':
    clear = lambda: os.system('cls')

    # This Function will clean any
    # command before execution of this python file
    clear()
    wishMe()
    username()

    while True:

        query = takeCommand().lower()

        if 'wikipedia' in query:
            speak('Searching Wikipedia...')
            query = query.replace("wikipedia", "")
            results = wikipedia.summary(query, sentences=3)
            speak("According to Wikipedia")
            print(results)
            speak(results)

        elif 'location' or 'find' in query:
            speak('Which book are you looking for?')
            name = takeCommand().lower()
            if 'exit' in name:
                speak("Thanks for giving me your time")
                exit()
            else:
                val = name
                status = val in df['Title'].unique()
                yes = df[['Shelf', 'Stack']].where(df['Title'] == val).dropna()
                if status == True:
                    print(yes)
                    speak(yes)
                if status == False:
                    speak('Book not found.')

        elif 'exit' or 'thank you' in query:
            speak("Thanks for giving me your time")
            exit()