import fetchByAuthor from '../fetchByAuthor';

describe('Fetch Quotes By Specific author', () => {
  it('should throw error when author is null or undefined', async () => {
    const result = await fetchByAuthor();
    if (!(result instanceof Error)) {
      throw new Error('Something unexpected happening');
    }

    expect(result instanceof Error).toBe(true);
    expect(result.message).toBe('Author is not selected');
  });

  it('should throw error when no quotes available from selected author', async () => {
    const result = await fetchByAuthor('LoremIpsum666');
    if (!(result instanceof Error)) {
      throw new Error('Something unexpected happening');
    }
    expect(result instanceof Error).toBe(true);
    expect(result.message).toBe("There's no quote from selected author");
  });

  it('Should fetch quotes from selected author', async () => {
    const selectedAuthor = 'Steve Jobs';

    const result = await fetchByAuthor(selectedAuthor);
    if (result instanceof Error) {
      throw new Error('Something unexpected happening');
    }

    expect(result.length > 0).toBe(true);
    expect(result[0].quoteAuthor).toBe(selectedAuthor);
  });
});
