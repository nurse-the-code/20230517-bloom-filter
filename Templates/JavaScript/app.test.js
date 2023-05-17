const { doAllTheThings, hashFunction1, add } = require('./app');

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information
test('doAllTheThings should be true', () => {
    expect(doAllTheThings()).toBeTruthy();
});

test('hashfunction1 should return a number between 0 and 43', () => {
    const strings = ["are", "preferred", "due", "to", "their", "block", "scope", "properties", "as", "opposed", "to"]

    strings.forEach(str => {
        const hash = hashFunction1(str);
        console.log({ str, hash });
        expect(hash).toBeGreaterThanOrEqual(0);
        expect(hash).toBeLessThan(43);
    });
});

test('hashfunction1 should return a number between 0 and 43 even when the string is really long', () => {
    const str = "The servers of Akamai Technologies, a content delivery provider, use Bloom filters to prevent \"one-hit-wonders\" from being stored in its disk caches. One-hit-wonders are web objects requested by users just once, something that Akamai found applied to nearly three-quarters of their caching infrastructure. Using a Bloom filter to detect the second request for a web object and caching that object only on its second request prevents one-hit wonders from entering the disk cache, significantly reducing disk workload and increasing disk cache hit rates.\n" +
        "\n" +
        "Google Bigtable,Apache HBase, and Apache Cassandra and PostgreSQL use Bloom filters to reduce the disk lookups for non-existent rows or columns. Avoiding costly disk lookups considerably increases the performance of a database query operation.\n" +
        "\n" +
        "The Google Chrome web browser previously used a Bloom filter to identify malicious URLs. Any URL was first checked against a local Bloom filter, and only if the Bloom filter returned a positive result was a full check of the URL performed (and the user warned, if that too returned a positive result).\n" +
        "\n" +
        "Medium uses Bloom filters to avoid recommending articles a user has previously read."
    const hash = hashFunction1(str);
    console.log({ str, hash });
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(43);
});

test('the bit array changed when a word was added', () => {
    const bitArray = new Array(43).fill(0);

    console.log({ "bitArray upon initialization": bitArray });

    add("are", bitArray);

    console.log({ "bitArray after adding a word": bitArray });

    const didBitArrayChange = bitArray.some(bit => bit === 1);

    expect(didBitArrayChange).toBe(true);
});