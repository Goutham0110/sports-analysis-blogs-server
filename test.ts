import initDatabase from './src/utils/connect-mongodb';
import Models from './src/models';


const populateStage = async () => {
    const data = [
        {
            title: `The Evolution of Modern Soccer Tactics`,
            author: 'Sarah Thompson',
            description: 'Explore how soccer tactics evolved from traditional formations to modern, fluid strategies in this comprehensive analysis by Sarah Thompson.',
            featured: false,
            content: `Soccer tactics have evolved dramatically over the years, shifting from rigid formations to fluid, dynamic playstyles. In this post, Sarah Thompson explores the history and development of soccer strategies, from the early 4-4-2 formations to the modern-day use of false nines and high pressing. With insights from renowned coaches and analysis of famous matches, this article provides a deep dive into the tactical trends shaping the beautiful game.`
        },
        {
            title: `The Unsung Heroes: Offensive Linemen in American Football`,
            author: 'Marcus Reynolds',
            description: 'Marcus Reynolds sheds light on the crucial yet overlooked role of offensive linemen in shaping a successful American football team.',
            featured: false,
            content: `While quarterbacks and wide receivers often steal the spotlight, the offensive linemen are the true unsung heroes of American football. Marcus Reynolds delves into the critical role these players play in both passing and running games. With expert opinions and statistical breakdowns, this post highlights the importance of a solid offensive line and profiles some of the greatest linemen in NFL history.`
        },
        {
            title: `Breaking Down the Greatest Tennis Rivalries of All Time`,
            author: 'Emily Parker',
            description: 'Relive the greatest tennis rivalries through Emily Parker’s detailed analysis of the most iconic matchups in the sport’s history.',
            featured: false,
            content: `Tennis has seen some legendary rivalries that have defined eras and captivated fans. Emily Parker takes a closer look at the greatest tennis rivalries, analyzing their impact on the sport and what made them so unforgettable. From Federer vs. Nadal to Serena vs. Venus, this post recounts epic battles on the court and the lasting legacies of these iconic matchups.`
        },
        {
            title: `The Rise of Esports: How Competitive Gaming is Changing the Sports Landscape`,
            author: 'Alex Carter',
            description: 'Alex Carter examines how esports is revolutionizing the sports world, attracting younger audiences, and redefining the concept of competitive sports.',
            featured: true,
            content: `In recent years, the world of sports has expanded beyond traditional physical activities to include a new, rapidly growing phenomenon: esports. What was once a niche hobby has transformed into a multi-billion-dollar industry, with professional players, international tournaments, and a global fanbase that rivals those of traditional sports. Alex Carter explores how competitive gaming has risen to prominence and its implications for the future of sports.

Esports, short for electronic sports, encompasses a wide range of competitive video gaming, from team-based games like League of Legends to one-on-one matchups in Street Fighter. The rise of streaming platforms like Twitch has allowed millions of fans to watch their favorite players in real-time, creating a level of engagement previously unseen in other sports. Major corporations and sports franchises have taken notice, investing heavily in esports teams and events.

One of the most significant impacts of esports is its ability to reach younger audiences. As viewership of traditional sports declines among younger generations, esports has filled the void, offering a new way to experience competition. Schools and universities have begun offering esports scholarships, and even the Olympics has started to explore the possibility of including esports in future games.

While some traditional sports fans remain skeptical, there's no denying the impact of esports on the sports industry. With its growing popularity and financial backing, competitive gaming is poised to continue its ascent, challenging the very definition of what constitutes a sport.`
        },
        {
            title: `Marathon Training: The Key to Building Endurance and Mental Toughness`,
            author: 'Laura Mitchell',
            description: 'Laura Mitchell breaks down essential marathon training strategies, focusing on building endurance and mental toughness for a successful race.',
            featured: true,
            content: `Training for a marathon is one of the most challenging and rewarding experiences an athlete can undertake. Whether you’re a seasoned runner or a newcomer to the sport, preparing for the 26.2-mile race requires a combination of physical conditioning, mental fortitude, and a well-structured plan. In this post, Laura Mitchell offers insights into the essential aspects of marathon training, emphasizing the importance of endurance and mental toughness.

Endurance is the cornerstone of marathon training. To build it, runners must gradually increase their mileage over time, allowing their bodies to adapt to longer distances. Incorporating long runs into your weekly routine, typically on weekends, helps to simulate the conditions of race day. These long runs also serve as a mental test, pushing runners to overcome fatigue and stay focused on their goal.

However, marathon training isn't just about logging miles. Cross-training, strength exercises, and proper nutrition all play crucial roles in preparing the body for the demands of a marathon. Cross-training activities like cycling or swimming can help prevent injuries by working different muscle groups, while strength training builds the muscle endurance needed to maintain good form during the race.

Mental toughness is equally important. Marathon running is as much a psychological challenge as it is a physical one. Techniques such as visualization, setting small goals, and maintaining a positive mindset can help runners push through the inevitable rough patches during training and on race day.

With the right approach to training, anyone can conquer the marathon distance. It’s a journey of endurance, discipline, and self-discovery that leaves a lasting impact, both physically and mentally.`
        }
    ];

    for(let blog of data){   
        await Models.Blog.create(blog);
        console.log("inserted ", blog.title);
    }
}

const createMany = async (count: number) => {
    for (let i = 1; i <= count; i++) {
        const blogData = {
            title: `Test Blog pages ${i}`,
            author: "Tony stark",
            description: 'Laura Mitchell breaks down essential marathon training strategies, focusing on building endurance and mental toughness for a successful race. Some more words added to max out the description and I think this should be pretty good.',
            featured: true,
            content: `While quarterbacks and wide receivers often steal the spotlight, the offensive linemen are the true unsung heroes of American football. Marcus Reynolds delves into the critical role these players play in both passing and running games. With expert opinions and statistical breakdowns, this post highlights the importance of a solid offensive line and profiles some of the greatest linemen in NFL history.`
        }
        await Models.Blog.create(blogData);
        console.log("inserted ", blogData.title);
    }
}

const deleteAll = async () => {
    await Models.Blog.deleteMany();
    console.log("Deleted all blogs")
}

const main = (async () => {
    const db = await initDatabase();
    try {
        await createMany(2);
    } catch (err) {
        console.log(err);
    } finally {
        db?.close();
    }
})()

