class Solution:

    def encode(self, strs: List[str]) -> str:
        if strs is None:
            return ""

        encodedStr = ""
        for word in strs:
            wordLength = len(word)

            encodedStr += str(wordLength) + "#" + word

        return encodedStr


    def decode(self, s: str) -> List[str]:
        if s is None or len(s) == 0:
            return []

        decodedWords = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            
            wordLength = int(s[i:j])

            i = j + wordLength + 1

            word = s[j + 1:i]

            decodedWords.append(word)
        
        return decodedWords
