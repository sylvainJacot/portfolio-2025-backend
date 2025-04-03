
export const trainingData = {
  intents: [
    // Hello
    {
      "tag": "greeting",
      "patterns": ["Hi", "Hello", "Hey", "How are you?", "What's up"],
      "responses": [
        "<b>👋 Hello!</b> I'm here to help you learn more about my background and expertise. Feel free to ask anything!",
        "<b>Hi there!</b> 😊 Looking for <b>insights</b> into my experience in frontend development? Ask away!"
      ]
    },

    // Bye
    {
      "tag": "goodbye",
      "patterns": ["Bye", "See you", "Goodbye", "Take care"],
      "responses": [
        "👋 <b>Goodbye!</b> If you have more questions, don’t hesitate to ask later! 😊",
        "🙋‍♂️ <b>See you!</b> Hope to chat again soon! Take care! 🌟",
        "💛 <b>Take care!</b> Feel free to reach out anytime. Bye!"
      ]
    },

    // Thanks
    {
      "tag": "thanks",
      "patterns": ["Thanks", "Thank you", "That's helpful"],
      "responses": [
        "🤗 <b>You’re very welcome!</b> Happy to help! 😊",
        "🙌 <b>Glad I could provide useful information.</b> Let me know if you need anything else!",
        "💡 <b>Anytime!</b> If you have more questions, feel free to ask. 🚀"
      ]
    },
    // Education
    {
      "tag": "education",
      "patterns": ["Tell me about your education", "What's your educational background?", "Where did you study?", "What's your degree?"],
      "responses": [
        "🎓 I have a background in <b>Graphic Design</b> from Haute Ecole Albert Jacquard, where I specialized in <b>Graphic and advertising communication</b>. I also pursued additional training in <b>UX/UI design</b> to refine my approach to user experience. ✨",
        "📚 My education blends creativity and technology. I studied <b>Graphic Design</b> and later specialized in <b>Graphic and advertising communication</b> and <b>UX/UI</b>, allowing me to create aesthetically pleasing and highly functional digital experiences. 🚀"
      ]
    },
    // Career
    {
      "tag": "career",
      "patterns": ["Tell me about your career", "What's your work experience?", "Where have you worked?", "What's your professional background?"],
      "responses": [
        "💻 I’ve built a career in <b>frontend development</b>, combining expertise in Web development and <b>UX/UI design</b>. I’ve worked in agencies, freelance, and product-based companies, creating scalable applications with high attention to user experience. 🎨",
        "🚀 With several years of experience in frontend development, I’ve worked at companies like <b>CentralApp</b>, <b>Atelier Design</b>, and <b>Wunderman Thompson</b>, focusing on performance optimization, UI/UX design, and seamless user experiences."
      ]
    },
    // Skills
    {
      "tag": "skills",
      "patterns": ["What are your skills?", "What technologies do you know?", "What are your areas of expertise?", "What frameworks are you familiar with?"],
      "responses": [
        "🛠️ I specialize in <b>JavaScript, React.js, Next.js</b>, and frontend performance optimization. I also have strong skills in <b>UX/UI design</b>, ensuring intuitive and engaging user experiences. 🎨",
        "✨ My expertise includes <b>JavaScript, React</b>, and <b>Next.js</b>, along with <b>UI/UX design</b>, performance tuning, and API integrations. I also use tools like <b>Figma</b> for design and <b>Sentry</b> for error tracking. 🚀"
      ]
    },
    // Projects
    {
      "tag": "projects",
      "patterns": [
        "What projects have you worked on?",
        "Tell me about your projects",
        "What kind of projects have you done?",
        "Can you share some projects?"
      ],
      "responses": [
        "🏗️ I’ve worked on projects like <b>CentralApp</b>, where I developed a React-based platform local businesses to boost their online presence. As a Frontend developer, I managed the CMS and website, focusing on both functionality and aesthetics—tackling challenges like legacy code, performance optimizations, and implementing new features to enhance user experience. Another notable project is <b>Febecoop</b>, where I created a multi-site platform sharing a single design for organizations promoting cooperative values. I’ve also worked on custom WordPress themes at <b>Atelier Design</b> and scalable e-commerce applications. 🛒",
        "🔧 Some key projects include building scalable UI components and optimizing web application performance. At <b>CentralApp</b>, I integrated third-party services like <b>TheFork</b> and <b>Partoo</b> to enhance business functionality. For <b>Febecoop</b>, I tackled the challenge of creating a cohesive multi-site platform. These experiences have sharpened my frontend development and problem-solving skills. 🚀"
      ],
      "followUp": {
        "question": "Would you like me to explain further about my projects?",
        "options": ["No", "Yes"]
      },
      "detailedResponses": [
        "Here’s more details about my projects:<br/>- <b>CentralApp</b>: As a Frontend developer, I worked on developing and maintaining the CMS and website using React. Key achievements include optimizing site performance, implementing new features to improve user experience, and navigating challenges with legacy code.<br/>- <b>Febecoop</b>: I created a multi-site platform using WordPress, ensuring a consistent design across all sites, which showcased my ability to manage complex site structures.<br/>- <b>Atelier Design</b>: I developed custom WordPress themes tailored to client needs, balancing aesthetics and functionality.",
        "Let me elaborate further:<br/>- <b>CentralApp</b>: I focused on frontend development with React, managing both the CMS and website’s functional and aesthetic aspects.<br/>- <b>Febecoop</b>: Using WordPress multisite functionality, I created a network of sites with a shared theme, addressing design consistency challenges.<br/>- <b>Atelier Design</b>: Delivered custom themes that met client specifications and boosted site performance."
      ]
    },
    // Passions / hobbies
    {
      "tag": "passions",
      "patterns": [
        "What are your passions?",
        "What do you like to do?",
        "What are your interests?",
        "What excites you about development?",
        "Do you have any hobbies?"
      ],
      "responses": [
        "💡 I’m passionate about crafting seamless user experiences, optimizing performance, and exploring the potential of <b>blockchain</b> in web development. I also love playing guitar because it allows me to disconnect from reality and recharge creatively. Outside of work, I enjoy hiking and discovering innovative technologies. 🌱",
        "🔥 Building intuitive, high-performance applications excites me! With almost 10 years of experience as a photo retoucher, I’ve developed a sharp eye for detail and aesthetics, which I bring into my development projects. I love experimenting with new technologies and staying at the forefront of web development trends. 🚀",
        "🎸 Beyond coding, I enjoy playing guitar—it’s my way to disconnect from reality and tap into my creative side. I’ve also spent nearly 10 years as a photo retoucher, honing skills in detail and design that enhance my work in web development. 🖼️"
      ]
    },
    // Goals
    {
      "tag": "goals",
      "patterns": ["What are your career goals?", "Where do you see yourself in the future?", "What do you want to achieve?", "What's next for you?"],
      "responses": [
          "🌟 My goal is to sharpen my skills in <b>frontend development</b>, crafting highly interactive and accessible web experiences that users love. I’m passionate about contributing to open-source projects, collaborating with others to create tools that empower the community. Plus, I’m excited to build innovative solutions—like blockchain integrations—that push the limits of what the web can do. 🌐",
          "🚀 I’m focused on growing as a <b>frontend development</b> while giving back by mentoring aspiring coders. I want to lead projects that make technology more inclusive, especially by improving accessibility and user interactions. Down the line, I see myself spearheading a team to tackle big, impactful challenges with creative tech solutions. ✨",
          "💡 Long-term, I’d love to become a voice in the frontend world—sharing knowledge through blogs, talks, or workshops. I’m also keen to explore cutting-edge tech like Web3 and decentralized apps, blending them into my work. Ultimately, my aim is to leave a mark through open-source contributions and projects that solve real problems. 🌍"
        ]
    },
    // Current Role
    {
      "tag": "current_role",
      "patterns": ["What is your current job?", "Where do you work now?", "Tell me about your current position."],
      "responses": [
          "👨‍💻 I’m currently a <b>Frontend Web Developer</b> at <b>CentralApp</b>, where I focus on building and maintaining a React-based platform for businesses in the hospitality sector. My work involves crafting user-friendly interfaces and ensuring seamless user experiences, which are key to helping clients—like restaurants and hotels—thrive online. 🏨",
          "🚀 At <b>CentralApp</b>, I’ve developed scalable UI components that have boosted the platform’s performance and user engagement. I’ve also integrated third-party services like payment gateways and booking systems, empowering businesses to build a strong online presence. I love collaborating with a dynamic team to tackle complex challenges and deliver top-notch products. 🌐"
        ]
    },
    // Experience
    {
      "tag": "experience",
      "patterns": ["How much experience do you have?", "How long have you been working?", "Tell me about your work history."],
      "responses": [
          "📅 With several years of experience in <b>frontend development</b>, I’ve improved my skills in UI/UX design, performance optimization, and API integrations. I’ve worked with technologies like React.js, Next.js and Wordpress contributing to projects such as e-commerce platforms and interactive web applications. My journey spans agencies, freelancing, and product-based companies, giving me a versatile, user-focused approach. 🎨",
          "🌍 My career has taken me through diverse environments, from the creative energy of agencies like  <b>Atelier Design</b> or <b>Wunderman Thompson</b> to the innovative focus of product companies like <b>CentralApp</b>. At Atelier Design, I teamed up with cross-functional groups to craft digital experiences for global brands. At CentralApp, I helped scale a React-based platform for mainly the hospitality sector, tackling challenges like legacy code and performance issues. This mix has built a solid foundation in frontend development, ready for any challenge. 🚀"
        ]
    },
    // Blockchain Interest
    {
      "tag": "blockchain_interest",
      "patterns": ["Are you interested in blockchain?", "Do you work with blockchain?", "Tell me about your blockchain knowledge."],
      "responses": [
        "🔗 Yes! I’m fascinated by <b>blockchain technology</b>, especially how it can revolutionize digital experiences. I’m exploring <b>smart contracts</b> and decentralized applications. 🚀",
        "✨ Blockchain fascinates me! While my primary focus is frontend development, I’m continuously learning how to integrate blockchain into web applications for better security and transparency. 🌐"
      ]
    },
    // Design
    {
      "tag": "design_background",
      "patterns": ["Do you have a design background?", "Have you worked as a designer?", "Tell me about your UX/UI experience."],
      "responses": [
          "🎨 Absolutely! I kicked off my career as a <b>UX/UI designer</b>, which has been a game-changer for my frontend development work. This background lets me blend aesthetics with functionality, ensuring that every application I build is not only visually stunning but also a breeze to use.",
          "👨‍🎨 My <b>UX/UI design</b> expertise allows me to create intuitive interfaces that solve real problems. I’m proficient with tools like <b>Figma</b> and <b>Sketch</b>, which I use to prototype and iterate on designs before bringing them to life with code. This seamless transition ensures pixel-perfect results every time. ✨"
        ]
    }, 
    // Contact
    {
      "tag": "contact",
      "patterns": ["How can I contact you?", "What's your email?", "Your contact details","Phone number", "Reach you", "Get in touch"
      ],
      "responses": [
        "You can call me at <b>+32 472544192</b> or email me at <a href=\"mailto:jct.sylvain@gmail.com\">jct.sylvain@gmail.com</a>.",
        "Feel free to reach out by phone: <b>+32 472544192</b> or drop an email at <a href=\"mailto:jct.sylvain@gmail.com\">jct.sylvain@gmail.com</a>."
      ]
    },
    // Languages
    {
      "tag": "languages",
      "patterns": ["What languages do you speak?","Languages","Native language", "Do you speak English?", "Language proficiency", "Which languages do you know?"
      ],
      "responses": [
        "My native language is <b>French</b> and I'm quite fluent in <b>English</b>.",
        "I speak <b>French</b> as my first language, and I have strong fluency in <b>English</b>."
      ]
    },
    // Location
    {
      "tag": "location",
      "patterns": [ "Where do you live?","Location", "Where are you based?", "What's your address?","Current location"],
      "responses": [
        "I'm currently living in <b>Wavre, Belgium</b>.",
        "My base is in <b>Wavre, Belgium</b>."
      ]
    }
  ]
};

module.exports = { trainingData };