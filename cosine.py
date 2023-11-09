from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import sys

# sentences in the database
db_sentences = [
    "turn on living room lamp",
    "turn off living room lamp",
    "turn on fan",
    "turn off fan",
    "open door",
    "close door",
    "turn on bedroom room lamp",
    "turn off bedroom room lamp",
    "nyalakan lampu kamar tidur",
    "matikan lampu kamar tidur",
    "nyalakan lampu kamar mandi",
    "matikan lampu kamar mandi"
]

# input sentence
# input_sentence = "",sys.argv[2]
input_sentence = sys.argv[1]

# create a CountVectorizer object
count_vectorizer = CountVectorizer()

# fit and transform the sentences in the database
count_matrix = count_vectorizer.fit_transform(db_sentences)

# transform the input sentence
input_vector = count_vectorizer.transform([input_sentence])

# calculate cosine similarity
cos_sim = cosine_similarity(input_vector, count_matrix)

# find the index of the most similar sentence
most_similar_index = cos_sim.argmax()

# print the most similar sentence
print("{}".format(db_sentences[most_similar_index]))