from pydub import AudioSegment
from pydub.playback import play

song1 = AudioSegment.from_mp3("test/mpVoice0.mp3")[:-100]
song2 = AudioSegment.from_mp3("test/mpVoice2.mp3")[:-100]
song3 = AudioSegment.from_mp3("test/mpVoice3.mp3")[:-100]
song4 = AudioSegment.from_mp3("test/mpVoice4.mp3")[:-100]
song5 = AudioSegment.from_mp3("test/mpVoice5.mp3")[:-100]
song6 = AudioSegment.from_mp3("test/mpVoice6.mp3")[:-100]
song8 = AudioSegment.from_mp3("test/mpVoice8.mp3")[:-100]
bg = AudioSegment.from_mp3("pengyou_01.mp3")

second_of_silence0 = AudioSegment.silent(duration=1300)
second_of_silence1 = AudioSegment.silent(duration=200)
second_of_silence2 = AudioSegment.silent(duration=200)

song = second_of_silence0.append(song1,crossfade=100).append(song2,crossfade=100).append(second_of_silence1).append(song3,crossfade=100).append(song4,crossfade=100).append(second_of_silence2).append(song5,crossfade=100).append(song6,crossfade=100).append(second_of_silence2).append(song8,crossfade=100).append(second_of_silence0)
played_togther = song.overlay(bg)
play(played_togther)
