import config from './config';
import { Client } from 'twitter-api-sdk';
import { SMTPClient, Message } from 'emailjs';

const twitterClient = new Client(config.bearerToken);

(async () => {
  try {
    const recentSearch = await twitterClient.tweets.tweetsRecentSearch({
      query: '#BeATC (from:FAANews) -is:retweet',
    });

    if (recentSearch.meta?.result_count && recentSearch.meta.result_count > 0) {
      console.log(recentSearch.meta.result_count + ' new Tweets found!');
      const smtpClient = new SMTPClient({
        host: config.smtp.host,
        port: config.smtp.port,
        ssl: config.smtp.useSsl,
        user: config.smtp.user,
        password: config.smtp.password,
      });

      const message = new Message({
        text: 'There is a new twitter #BeATC Twitter post!',
        from: 'dbetz@darkstar.localdomain',
        to: 'hashref@gmail.com',
        subject: 'FAA BeATC Twitter Update',
      });

      smtpClient.send(message, () => {});
    } else {
      console.log('No new Tweets found.');
    }
  } catch (error) {
    console.log(error);
  }
})();
