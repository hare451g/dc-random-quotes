import fetchRandomQuotes from '../fetchRandomQuotes';

describe('Fetch Random Quotes', () => {
  it('Should have fetched quote with correct type definition', async () => {
    const result = await fetchRandomQuotes();

    if (result instanceof Error) {
      throw new Error(result.message);
    }

    const { quoteAuthor, quoteText, quoteGenre } = result;

    expect(quoteAuthor).toBeDefined();
    expect(typeof quoteAuthor).toBe('string');

    expect(quoteText).toBeDefined();
    expect(typeof quoteText).toBe('string');

    expect(quoteGenre).toBeDefined();
    expect(typeof quoteGenre).toBe('string');
  });
});
