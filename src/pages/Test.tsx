import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getBlogEntry } from '../get-blog-entry'

// Since the blog entries are all created, hard-code
const markdown = `# Moving-In, One Month Retrospective

Yeah I'm using (project management) scrum terms, let's go! It's now been over a month since I've moved into my new apartment, and specifically today and yesterday I decided I wanted to vent lol. The weather is finally calming down, and with that the UV rays weaken, and true bliss returns to my life.

## Apartment Retrospective
One month! Dang! At this point I'm logistically settled, I have my desk, bed, chair, clothes hanging area, cutlery and plates, you name it. It's been chill, laundromat is about a 4 minute walk (faster if I speed walk) so even laundry is fine. About 600-800 yen each week ain't bad to be honest. Garbage I understand now, but recycling is a bit weird. Sometimes they take my plastics and sometimes they don't. Apparently there's other collection areas but it doesn't feel right to just leave a bag of plastics on the side of the street... so I just gamble each week. I really do appreciate how they have dedicated recycling days for bottles, cans, glasses, because it feels in a sense that recycling this way actually impacts the earth.

A few things leftover for me before I can finalize my routine. A couple days ago I paid my electric bill which was cool. You just bring it up to the convenience store, they scan it, and you pay like you would for a melon bun. I still need to pay my water and rent, which needs to be done by bank transfer at an ATM... and I'm dreading it (more on that below).

## Spending Changes
I got my salary for last month and it's rough. Like I'm talking 36% of my gross income was deducted for taxes and pension. Goodness. 36%? I'm not even making that much... do they have tax brackets here? I calculated the tax rate for my monthly salary in Canadian dollars, with a Canadian tax rate in Ontario and I would literally get taxed less in Canada. What happened to Canada being one of the top tax eaters, 6ixbuzz commenters? (Minor vent, sorry). Jokes aside, I'm just shocked really but when a lot of the deductible is for a pension, things start to line up, let's say.

Anyways after that reality check I realized that my daily food budget + rent + utilities is quite literally going to be exactly my take home pay. Yikes. That doesn't even include commuting costs, entertainment, etc. At least my commute to work is covered, but everything else? I mean, I'm on a staycation right? I can't just stay at home all day, and as great as the transit system is here in Japan, it still _costs_ money. 318 yen one way to Shibuya, 178 yen one way to Ikebukuro; it all adds up. So yeah, any entertainment, like buying merchandise or a guilty pleasure (gachapon, crane games) comes out of my pocket! Not a problem, if I were here for only a month instead of five months in total. And I still need a graduation trip... with what funds? Not the funds from this co-op! Don't even get me thinking about tuition and rent on my last school term.

So yeah, I'm trying to limit my extra spending now which means I need to spend my free time doing activities that don't cost money. Yeah right, me? Seriously? When I'm surrounded my Japanese Anime goods? Fine, I'll just cut back on my food budget, save what I can here and there and use that extra money on myself. Of course, I'm still going to take money from my Canadian bank to buy the things I want. Where will that money come from? My savings for school. I'm mortgaging my enjoyment here with my future. I guess that's why they call it a mortgage- make no mistake however, I am not as financially instable as I am making myself out to be right now.

## Vents, and I'm Not Talking About Air Ducts
Haha. Alright minor vent time, and let me preface I am NOT trying to throw shade at anyone or any society, just laying out my thoughts. Japan is an amazing society. Seriously. Super advanced, great food, it's cheap! Why doesn't everyone move here? Well... as advanced as the country is, why do I have to use cash? How come when opening a bank account you only give me a card to WITHDRAW cash (I can't even use it to pay for goods). Food is great yes, but you're missing so many vegetables and fruits... because they're, expensive? It's so cheap living here! Well yeah, maybe if you're not in Tokyo. If we use our brains a bit, with a lower cost of living, means a lower salary for every worker. Why do you guys think people in California and New York get paid way more than Canadians? Well when rent is $4000 a month for a bed and maybe a closet you can probably figure that out for yourself.

Okay buy my main rant really boils down to: am I really a part of this society? I speak, conversational Japanese. Much better than most tourists and certainly more than someone who "just watches Anime all day." But everytime I speak it I feel like somethings missing. Conversing really is about connecting yourself with the other party, but I feel like my words fall flat due to there being an invisible... barrier. A difference between me and the regular 日本人. I'll let you guys connect the dots but this all circles back to my experience first trying to open a bank account. I brought the forms, ID, work contract signed, and the staff tell me "we're closing soon [in over an hour]. Could you return with someone who speaks fluent Japanese and we can try again?" What? I brought all the forms... do I really need to speak that much Japanese? Is my Japanese not enough? It was fine at the city office... and the forms, that's all the information you need from me! Well, I work in Shibuya, a 40 minute train from here, I am sure as heck not dragging my coworkers HERE to help me. Let me go to the one in Shibuya- which they let me; which I find odd, considering I was told to go to my nearest bank office to open my account lol. Oh yeah, only one bank in Japan lets foreigners open bank accounts! Japan Post Bank! Have fun being an international student here!

Oh, and did I mention that I have to pay for my rent through bank transfer? And that I can't do it online because I can't switch my apple ID to Canada because I have iCloud? That means I have to go to an ATM! Fine, oh wait, I have to return to that dreaded bank from above. Oh yeah and why not screw me over again, each transfer above 50000 yen costs 440 yen, and below costs 220 yen. I'm down 660 yen just for paying my bills. Splendid. Absolutely pristine I might add.

For all the amazing experience I have here, I always miss something back home. And this week, it's the feeling of being connected that I always feel in Canadian society.

### Thailand...?
Yep, got my manager's approval and now I'm waiting for the legal/HR team to approve my request. About a week there and honestly I'm content with just eating food there haha. Fruit in Japan is too expensive and well, in Thailand, it's cheaper than water... and tastes incredible.

### Markdown.
![Haewon.](https://media1.tenor.com/m/1vn9z9hHmDMAAAAd/haewon-see-that.gif)`

const Test = () => {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{getBlogEntry("december-1")}</ReactMarkdown>
    </div>
  );
};

export default Test;
