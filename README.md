# Bloom Filters

## What is a Bloom filter?

A Bloom filter is a space-efficient data structure created by computer scientist Burton Howard Bloom in 1970. 

A Bloom filter is used to test whether an element is a member of a set. The data structure is probabilistic rather than deterministic. This means that if the Bloom filter returns ‘true’ for a certain element, it means that most likely the element is present in the set. In other words, false positives are likely. 

However, if the Bloom filter returns false, it is deterministic, meaning that the element is definitely not in the set. As such, false negatives are impossible.

## Use cases:

The servers of Akamai Technologies, a content delivery  provider, use Bloom filters to prevent "one-hit-wonders" from being stored in its disk caches. One-hit-wonders are web objects requested by users just once, something that Akamai found applied to nearly three-quarters of their caching infrastructure. Using a Bloom filter to detect the second request for a web object and caching that object only on its second request prevents one-hit wonders from entering the disk cache, significantly reducing disk workload and increasing disk cache hit rates.


Google Bigtable,Apache HBase, and Apache Cassandra and PostgreSQL use Bloom filters to reduce the disk lookups for non-existent rows or columns. Avoiding costly disk lookups considerably increases the performance of a database query operation.


The Google Chrome  web browser previously used a Bloom filter to identify malicious URLs. Any URL was first checked against a local Bloom filter, and only if the Bloom filter returned a positive result was a full check of the URL performed (and the user warned, if that too returned a positive result).


Medium uses Bloom filters to avoid recommending articles a user has previously read.

## Algorithm

Algorithm:

An empty Bloom filter is a bit array of m bits, all set to 0. There must also be k different hash functions defined, each of which maps or hashes some set element to one of the m array positions, generating a uniform random distribution.

To add an element, feed it to each of the k hash functions to get k array positions. Set the bits at all these positions to 1.

To query for an element (test whether it is in the set), feed it to each of the k hash functions to get k array positions. If any of the bits at these positions is 0, the element is definitely not in the set; if it were, then all the bits would have been set to 1 when it was inserted. If all are 1, then either the element is in the set, or the bits have by chance been set to 1 during the insertion of other elements, resulting in a false positive.

## Pseudocode for Add

```
add(word, bitArray) {
	hash1 = h1(word)
	hash2 = h2(word)
	hash3 = h3(word)
	bitArray[hash1] = 1
bitArray[hash2] = 1
bitArray[hash3] = 1
}
```
## Pseudocode for isPresent

```
isPresent(word, bitArray) {
	hash1 = h1(word)
	hash2 = h2(word)
	hash3 = h3(word)
	if (bitArray[hash1] == 0)
		return false
if (bitArray[hash2] == 0)
	return false
if (bitArray[hash3] ==0)
return false
return true 
}
```

## Assignment

Implement a Bloom filter that adds words to a set and then checks if words are present or not.



# C3ProjectTemplate

See solutions in different languages in the "Templates" directory. Once you decide which language you'd like to use,
simply open that directory in your favorite IDE, and you should be able to run the included unit tests "out of the box".

The recommended IDEs are as follows, but feel free to use whatever IDE you are comfortable with.

-   [C#](Templates/C#) - [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs/community/)
-   [Java](Templates/Java) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [JavaScript](Templates/JavaScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
-   [Kotlin](Templates/Kotlin) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [TypeScript](Templates/TypeScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
