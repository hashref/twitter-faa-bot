import config from './config';
import { Client } from 'twitter-api-sdk';

const { bearerToken } = config;

const client = new Client(bearerToken);

(async () => {
  try {
    const recentSearch = await client.tweets.tweetsRecentSearch({
      query: '#BeATC (from:FAANews) -is:retweet',
    });
    console.dir(recentSearch.meta?.result_count || 0, {
      depth: null,
    });
  } catch (error) {
    console.log(error);
  }
})();
