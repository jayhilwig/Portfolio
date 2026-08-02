angular.module('main.services', [])


.factory('cardService', function() {

  var allCards=new Object();

  var allCards = [
  { id: 0, title: 'Learn', rowShow: 'learnRow', colorDef: 'learnColor', fabricDef: 'learnFabric', hideSome11: 'hidden', hideSome12: 'hidden',hideSome13: 'hidden',hideSome14: 'hidden',

head0: 'Activity Analysis', 
content0: 'HOW: List or represent in detail all tasks, actions, objects, performers, and interactions involved in a process.',
contentB0: 'WHY: This is a useful way to identify and prioritize which stakeholders to interview as well as which issues to address.', 
foot0: 'Analyzing the many activities and procedures involved in brushing teeth helped the IDEO team to understand some unanticipated needs and concerns.' 
,cardsymbol0: 'ion-beaker',

head1: 'Affinity Diagrams',
content1: 'HOW: Cluster design elements according to intuitive relationships such as similarity, dependence, proximity, etc.',
contentB1: 'WHY: This method is a useful way to identify connections between issues and reveal innovation opportunities.',
foot1: 'Clustering the elements related to transporting the family helped the IDEO team to discover some the significant opportunities for stroller design.' 
,cardsymbol1: 'ion-android-share',

head2: 'Anthropometric Analysis', 
content2: 'HOW: Use human population measurement data to check the coverage and suitability of the design solution for the target user group.',
contentB2: 'WHY: This helps to identify a representative group of people for testing design concepts and evaluating the general usability of product details.', 
foot2: 'Selecting individuals with hand size representative of the population to test prototypes helped IDEO design a computer mouse suitable for general use.' 
,cardsymbol2: 'ion-game-controller-a',

head3: 'Character Profiles', 
content3: 'HOW: Based on observations of real people, develop character profiles to represent archetypes and the details of their behavior or lifestyles.', 
contentB3: 'WHY: This is a useful way to bring a typical customer to life and to communicate the value of different concepts to various target groups.', 
foot3: 'In order to understand different types of customers and how to target them, IDEO developed four characters for pharmacy wanting to reach the male beauty-product market.' 
,cardsymbol3: 'ion-man',

head4: 'Cognitive Task Analysis', 
content4: "HOW: List and summarize all of a user's sensory inputs, decision pOints, and actions.",
contentB4: "WHY: This is good for understanding users' perceptual, attentional, and informational needs and to identify bottlenecks where errors may occur.", 
foot4: 'Cognitive task analysis helped the IDEO team understand the proximity and disorientation problems the remote-vehicle operator suffered due to the design of their controls.' 
,cardsymbol4: 'ion-wrench',

head5: 'Competitive Product Survey', 
content5: "HOW: Collect, compare, and conduct evaluations of the product's competition.", 
contentB5: 'WHY: This is a useful way to establish functional requirements, performance standards, and other benchmarks.', 
foot5: 'Developing a new soft drink, the IDEO design team surveyed the competition for functionality and form factors.' 
,cardsymbol5: 'ion-beer',

head6: 'Cross-Cultural Comparisons',
content6: 'HOW: Use personal or published accounts to reveal differences in behaviors and artifacts between national or other cultural groups.', 
contentB6: 'WHY: This helps teams to understand various cultural factors and the implications for their projects when designing for unfamiliar or global markets.', 
foot6: 'In designing a messaging device for an international market, IDEO compared communication methods across cultures.' 
,cardsymbol6: 'ion-ios7-world',

head7: 'Error Analysis', 
content7: 'HOW: List all the things that can go wrong when using a product and determine the various possible causes.', 
contentB7: 'WHY: This is a good way to understand how design features mitigate or contributeo to inevitable human errors and other failures.', 
foot7: 'The IDEO team used error analysis on a remote-control concept in order to maximize the functionality of each button’s size, shape, and texture.'
,cardsymbol7: 'ion-ios7-glasses-outline',

head8: 'FlowAnalysis', 
content8: 'HOW: Represent the flow of information or activity through all phases of a system or process.', 
contentB8: 'WHY: This is useful for identifying bottlenecks and opportunities for functional alternatives.', 
foot8: 'Designing an online advice website, flow analysis helped IDEO team to design a more seamless experience navigating the site.'
,cardsymbol8: 'ion-chatbubble-working',

head9: 'Historical Analysis', 
content9: 'HOW: Compare features of an industry, organization, group, market segment, or practice through various stages of development.', 
contentB9: 'WHY: This method helps to identify Trends and cycles of product use and customer behavior and to project those patterns into the future.', 
foot9: 'A historical view of changes in chair design helped IDEO to define a common language and reference points for the client and the team.'
,cardsymbol9: 'ion-android-timer',

head10: 'Long-Range Forecasts', 
content10: "HOW: Write up prose scenarios that describe how social and/or technological trends might influence people's behavior and the use of a product, service, or environment.", 
contentB10: 'WHY: Predicting changes in behavior. industry, or technology can help clients to understand the implications of design decisions.', 
foot10: 'In an effort to describe how changes in work behavior might affect design strategy, the IDEO team wrote up forecasts to consider future circumstances or contexts in office spaces.'
,cardsymbol10: 'ion-ios7-partlysunny-outline'
  },
  

  { id: 1, title: 'Look', rowShow: 'lookRow', colorDef: "lookColor", fabricDef: 'lookFabric',
 hideSome11: 'hidden', hideSome12: 'hidden',hideSome13: 'hidden',hideSome14: 'hidden',
head0: 'A Day in the Life',
content0: 'HOW: Catalog the activities and contexts that users experience throughout an entire day. ',
contentB0: 'WHY: This is a useful way to reveal unanticipated issues inherent in the routines and circumstances people experience daily.',
foot0: 'IDEO asked potential wearers of a drug-delivery patch to document their daily behaviors including those that might affect the function of the patch - getting wet, snagging on clothing etc.'
,cardsymbol0: 'ion-grid',

head1: 'Behavioral Archaeology',
content1: "HOW: Look for the evidence of people's activities inherent in the placement, wear patterns, and organization of places and things.", 
contentB1: "WHY: This reveals how artifacts and environments figure in people's lives, highlighting aspects of their lifestyle, habits, priorities and values. ",
foot1: 'Noting that people efficiently organize multiple work tasks by stacking paper all over their desk surfaces, IDEO invented a brand-new system furniture element to support this.'
,cardsymbol1: 'ion-drag',

head2: 'Behavioral Mapping ',
content2: 'HOW: Track the positions and movements of people within a space over time. ',
contentB2: 'WHY: Recording the pathways and traffic patterns of occupants of a space helps to define zones of different spatial behaviors.', 
foot2: 'Tracking the paths of visitors help designers to identify the traffic spots and the vacant, underused areas of a museum lobby.' 
,cardsymbol2: 'ion-ios7-navigate',

head3: 'Fly on the Wall',
content3: "HOW: Observe and record behavior within its context, without interfering with people's activities. ",
contentB3: 'WHY: It is useful to see what people actually do within real contexts and time frames, rather than accept what they say they did after the fact. ',
foot3: 'By spending time in an operating room, IDEO designers witnessed the regard with which the surgeons treated a transplant organ and incorporated these ideas into the transport box they were designing.'
,cardsymbol3: 'ion-bug',

head4: 'Guided Tours',
content4: 'HOW: Accompany participants on a guided tour of the project-relevant spaces and activities they experience. ',
contentB4: 'WHY: Making an exploration of objects and actions in situ helps people recall their intentions and values. ',
foot4: 'By following users through their homes, the IDEO team understood the various motivations behind ways photographs are used and stored.' 
,cardsymbol4: 'ion-image',

head5: 'Personal Inventory ',
content5: 'HOW: Document the things that people identify as important to them as a way of cataloging evidence of their lifestyles.', 
contentB5: "WHY: This method is useful for revealing people's activities, perceptions, and values as well as patterns among them. ",
foot5: 'For a project to design a handheld electronic device, the IDEO team asked people to show and describe the personal objects they handle and encounter every day.' 
,cardsymbol5: 'ion-ipod',

head6: 'Rapid Ethnography ',
content6: 'HOW: Spend as much time as you can with people relevant to the design topic. Establish their trust in order to visit and/or participate in their natural habitat and witness specific activities.', 
contentB6: 'WHY: This is a good way to achieve a deep firsthand understanding of habits, rituals, natural language, and meanings around relevant activities and artifacts.', 
foot6: 'In exploring opportunities for internet-enabled devices, an IDEO team spent time with families from different ethnic, economic, and educational backgrounds to learn about their daily patterns.'
,cardsymbol6: 'ion-ios7-people',

head7: 'Shadowing ',
content7: 'HOW: Tag along with people to observe and understand their day-to-day routines, interactions, and contexts.', 
contentB7: "WHY: This is a valuable way to reveal design opportunities and show how a product might affect or complement users' behavior.", 
foot7: 'The IDEO team accompanied truckers on the routes in order to understand how they might be affected by device capable of detecting their drowsiness.' 
,cardsymbol7: 'ion-map',

head8: 'Social Network Mapping',
content8: 'HOW: Notice different kinds of social relationships within a user group and map the network of their interactions. ',
contentB8: 'WHY: This is a useful way to understand interpersonal and professional relationship structures within workgroups. ',
foot8: 'Understanding the social relationships within a workplace helped IDEO to articulate how environment design could support these important connections.'
,cardsymbol8: 'ion-ios7-briefcase',

head9: 'Still-Photo Survey ',
content9: 'HOW: Follow a planned shooting script and capture pictures of specific objects, activities, etc.', 
contentB9: 'WHY: The team can use this visual evidence to uncover patterns of behavior and perceptions related to a particular product or context. as well as structure and inspire design ideas.', 
foot9: 'For a faucet design, the team document all the situations in which people access to water.'
,cardsymbol9: 'ion-ios7-rainy',

head10: 'Time-Lapse Video',
content10: 'HOW: Set up a time-lapse camera to record movements in a space over an extended period of time.', 
contentB10: 'WHY: Useful for providing an objective, longitudinal view of activity within a context. ',
foot10: 'The idea team recorded the activity of museum visitors over several days to learn how to improve space layout.',
cardsymbol10: 'ion-videocamera'
 },


  { id: 2, title: 'Ask', rowShow: 'askRow', colorDef: "askColor", fabricDef: 'askFabric', 

head0: 'Camera Journal',
content0: 'HOW: Ask potential users to keep a written and visual diary of their impressions, circumstances, and activities related to the product.', 
contentB0: 'WHY: This rich, self-conducted notation technique is useful for prompting users to reveal pOints of view and patterns of behavior. ',
foot0: "The IDEO team designing a travel information system distributed camera journal's two families taking car trips to capture map reading and other car travel behavior."
,cardsymbol0: 'ion-ios7-camera', 

head1: 'Card Sort',
content1: 'HOW: On separate cards, name possible features, functions, or design attributes. Ask people to organize the cards spatially, in ways that make sense to them. ',
contentB1: "WHY: This helps to expose people's mental models of a device or system. Their organization reveals expectations and priorities about the intended functions. ",
foot1: 'In a project to design a new digital phone service, a card-sorting exercise enabled potential users to influence the final menu structure and naming.'
,cardsymbol1: 'ion-card',

head2: 'Cognitive Maps ',
content2: 'HOW: Ask participants to map an existing or virtual space and show how they navigate it.', 
contentB2: 'WHY: This is a useful way to discover the significant elements, pathways, and other spatial behavior associated with a real or virtual environment. ',
foot2: 'Mapping how they occupy our pastor different zones of the city, the IDEO team asked bike messengers to indicate where water oases are located and how they reached them.'
,cardsymbol2: 'ion-android-locate',

head3: 'Collage ',
content3: 'HOW: Ask participants to build a collage from a provided collection of images, and to explain the signifkance of the images and arrangements they choose. ',
contentB3: "WHY: This illustrates participants' understanding and perceptions of issues and helps them verbalize complex or unimagined themes. ",
foot3: "Participants were asked to create a collage around the theme of sustainability to help the IDEO team understand how new technologies might be applied to better support people's perceptions."
,cardsymbol3: 'ion-leaf', 

head4: 'Conceptual Landscape',
content4: 'HOW: Diaqram, sketch, or map the aspects of abstract social and behavioral constructs or phenomena. ',
contentB4: "WHY: This is a helpful way to understand people's mental models of the issues related to the design problem. ",
foot4: 'Designing an online university, the IDEO team illustrated the different motivations, activities, and values the prompt people to go back to school.'
,cardsymbol4: 'ion-calculator',

head5: 'Cultural Probes ',
content5: 'HOW: Assemble a camera journal kit (camera, film, notebook, instructions) and distribute it to participants within one or across many cultures.', 
contentB5: 'WHY: To collect and evaluate perceptions and behaviors within or across cultures. ',
foot5: "Comparing the ways different cultures care for their teeth helped expose important similarities and differences to the IDEO team."
,cardsymbol5: 'ion-icecream',

head6: 'Draw the Experience ',
content6: 'HOW: Ask participants to visualize an experience through drawings and diagrams. ',
contentB6: 'WHY: This can be a good way to debunk assumptions and reveal how people conceive of and order their experiences or activities. ',
foot6: "By asking people to 'draw your money', the IDEO team designing an online bank was able to discern people's attitudes towards their finances. "
,cardsymbol6: 'ion-edit',

head7: 'Extreme User Interviews',
content7: 'HOW: Identify individuals who are extremely familiar or completely unfamiliar with the product and ask them to evaluate their experience using it.', 
contentB7: 'WHY: These individuals are often able to highlight key issues of the design problem and provide insights for design improvements. ',
foot7: "By understanding the role and mindset of the youngest family member, the IDEO team uncovered new product design opportunities for household cleaning."
,cardsymbol7: 'ion-waterdrop',

head8: 'Five Whys? ',
content8: "HOW: Ask 'Why?' questions in response to five consecutive answers. ",
contentB8: 'WHY: This exercise forces people to examine and express the underlying reasons for their behavior and attitudes. ',
foot8: "'Five Whys' was used when interviewing dieting women around the United States to understand their attitudes and behaviors around weight loss."
,cardsymbol8: 'ion-woman',

head9: 'Foreign Correspondents ',
content9: 'HOW: Request input from coworkers and contacts in other countries and conduct a cross-cultural study to derive basic international design principles. ',
contentB9: 'WHY: This is a good way to illustrate the varied cultural and environmental contexts in which products are used. ',
foot9: "Compiling a global survey about personal privacy, IDEO correspondence from around the world contributed images and anecdotes from their own lives."
,cardsymbol9: 'ion-earth', 

head10: 'Narration ',
content10: 'HOW: As they perform a process or execute a specific task, ask participants to describe aloud what they are thinking. ',
contentB10: "WHY: This is a useful way to reach users' motivations, concerns, perceptions, and reasoning. ",
foot10: "In order to understand how food is incorporated into people's daily routines, the IDEO team asked people to describe what they were thinking while eating."
,cardsymbol10: 'ion-pizza',

head11: 'Surveys Questionnaires ',
content11: 'HOW: Ask a series of targeted questions in order to ascertain particular characteristics and perceptions of users. ',
contentB11: 'WHY: This is a quick way to elicit answers from a large number of people. ',
foot11: 'Developing a new gift-wrap packaging concept the IDEO team conducted web-based surveys to collect consumer perspectives from many people around the world.'
,cardsymbol11: 'ion-ios7-box-outline', 

head12: 'Unfocus Group ',
content12: 'HOW: Assemble a diverse group of individuals in a workshop to use a stimulating range of materials and create things that are relevant to your project.', 
contentB12: 'WHY: Encourages rich, creative, and divergent contributions from potential users, releases inhibitions, and opens up new thinking. ',
foot12: "An idea team invited a foot-fetishist, an artist, a body-worker, a podiatrist, and others to work together to explore and build concepts for a new range of fashion sandals."
,cardsymbol12: 'ion-social-freebsd-devil',

head13: 'Word-Concept Association ',
content13: 'HOW: Ask people to associate descriptive words with different design concepts or features in order to show how they perceive and value the issues.', 
contentB13: "WHY: Clustering users' perceptions helps to evaluate and prioritize design features and concepts. ",
foot13: "Developing the design of a new container, word-concept association studies helped the IDEO team to understand how different forms convey different meaning to users."
,cardsymbol13: 'ion-arrow-swap'
},


  { id: 3, title: 'Try', rowShow: 'tryRow', colorDef: "tryColor", fabricDef: 'tryFabric', 
  cardsymbol0: 'ion-man', cardsymbol1: 'ion-woman', cardsymbol2: 'ion-pizza', cardsymbol3: 'ion-link', cardsymbol4: 'ion-bookmark', cardsymbol5: 'ion-bookmark', cardsymbol6: 'ion-bookmark', cardsymbol7: 'ion-bookmark', cardsymbol8: 'ion-coffee', cardsymbol9: 'ion-bookmark', cardsymbol10: 'ion-bookmark', cardsymbol11: 'ion-female', cardsymbol12: 'ion-heart', cardsymbol13: 'ion-information',

head0: 'Behavior Sampling ',
content0: 'HOW: Give people a pager or phone and ask them to record and evaluate the situation they are in when it rings. ',
contentB0: "WHY: This is a useful way to discover how products and services get integrated into people's routines in unanticipated ways. ",
foot0: "Developing an implantable defibrillator system, the IDEO team distributed pages to the client seemed to signal a defibrillator in shock. This evoked deep empathy for the patient's everyday experience."
,cardsymbol0: 'ion-heart', 

head1: 'Be Your Customer',
content1: "HOW: Ask the client to describe, outline, or enact their typical customer's experience. ",
contentB1: "WHY: This is a helpful way to reveal the client's perceptions of their customer and provide an informative contrast to actual customer experiences. ",
foot1: "An IDEO innovation workshop designing desktop printers began with an exploration of the client's preconceptions about how people choose and purchase a printer."
,cardsymbol1: 'ion-ios7-printer',

head2: 'Bodystorming ',
content2: 'HOW: Set up a scenario and act out roles, with or without props, focusing on the intuitive responses prompted by the physical enactment. ',
contentB2: 'WHY: This method helps to quickly generate and test many context-and behavior-based concepts. ',
foot2: "Bodystorming various ways is sleeping and airplanes helped the IDEO design team to generate a wide variety of concepts for an airplane interior."
,cardsymbol2: 'ion-plane', 

head3: 'Empathy Tools',
content3: 'HOW: Use tools like clouded glasses and weighted gloves to experience processes as though you yourself have the abilities of different users. ',
contentB3: 'WHY: This is an easy way to prompt an empathic understanding for users with disabilities or special conditions. ',
foot3: 'IDEO designers wore gloves to help them evaluate the suitability of cords and buttons for a home-health monitor designed for people with reduced dexterity and tactile sensation.'
,cardsymbol3: 'ion-android-hand', 

head4: 'Experience Prototype ',
content4: 'HOW: Quickly prototype a concept using available materials and use it in order to learn from a simulation of the experience using the product.', 
contentB4: 'WHY: This is useful for revealing unanticipated issues or needs, as well as evaluating ideas.',
foot4: 'The IDEO team built a working interactive model of a digital camera to understand the experience of different interaction design solutions.'
,cardsymbol4: 'ion-ios7-camera-outline',

head5: 'Informance ',
content5: "HOW: Act out an 'informative performance' scenario by role-playing insights or behaviors that you have witnessed or researched.", 
contentB5: 'WHY: This is a good way to communicate an insight and build a shared understanding of a concept and its implications. ',
foot5: 'IDEO team members redesigning a shopping experience use informance to convey the implications of proposed technology concepts.'
,cardsymbol5: 'ion-ios7-cart',

head6: 'Paper Prototyping' ,
content6: 'HOW: Rapidly sketch, layout, and evaluate interaction design concepts for basic usability.' ,
contentB6: "WHY: This is goad way to quickly organize, articulate, and visualize interaction design concepts." ,
foot6: 'Sketching out various screens and testing their sequence helped the IDEO team to demonstrate the logic necessary for a successful interaction with an in-store inventory database.'
,cardsymbol6: 'ion-paper-airplane', 

head7: "Predict Next Year's Headlines ",
content7: 'HOW: Invite clients to project their company into the future, identifying how they want to develop and sustain customer relationships.', 
contentB7: 'WHY: Based On customer-focused research, these predictions can help clients to define which design issues to pursue in product development. ',
foot7: 'Designing an intranet site for information technologists, the IDEO team prompted the client to define and clarify their business targets for immediate and future launches.'
,cardsymbol7: 'ion-ios7-calendar-outline',

head8: 'Quick-and-Dirty Prototyping',
content8: 'HOW: Using any materials available, quickly assemble possible forms or interactions for evaluation.',
contentB8: 'WHY: This is a good way to communicate a concept to the team and evaluate how to refine the design. ',
foot8: 'IDEO team members designing a shopping device quickly prototyped various concepts to evaluate qualities like weight, size, and orientation.'
,cardsymbol8: 'ion-ios7-fastforward',

head9: 'Role-Playing ',
content9: 'HOW: Identify the stakeholders involved in the design problem and assign those roles to members of the team.', 
contentB9: 'WHY: By enacting the activities within a real or imagined context, the team can trigger empathy for actual users and raise other relevant issues.', 
foot9: 'Designing a medical device, the IDEO team role-played a situation involving a doctor, a nurse, a patient, and an anesthesiologist to simulate the interdependent tasks demanded of the operating room staff.'
,cardsymbol9: 'ion-ios7-medkit-outline',

head10: 'Scale Modeling ',
content10: 'HOW: Use scaled, generic architeclural model components to design spaces with the client, team, and/or users.', 
contentB10: 'WHY: This spatial prototyping tool provides a way to raise issues and respond to the underlying needs of different stakeholders.', 
foot10: "In designing home office products, the idea design team use scale models to allow people to explore usage scenarios."
,cardsymbol10: 'ion-model-s', 

head11: 'Scenarios',
content11: 'HOW: Illustrate a character-rich story line describing the context of use for a product or service.', 
contentB11: 'WHY: This process helps to communicate and test the essence of a design idea within its probable context of use. It is especially useful for the evaluation of service concepts. ',
foot11: 'Designing a community website, the IDEO team drew up scenarios to highlight the ways particular design ideas serve different user needs.'
,cardsymbol11: 'ion-ios7-people-outline',

head12: 'Scenario Testing ',
content12: 'HOW: Show users a series of cards depicting possible future scenarios and invite them to share their reactions. ',
contentB12: 'WHY: Useful for compiling a feature set within a possible context of use as well as communicating the value of a concept to clients. ',
foot12: 'Designing a handheld media device, the IDEO team use scenario cards to ask potential users to evaluate early concepts.'
,cardsymbol12: 'ion-headphone',

head13: 'Try it Yourself ',
content13: 'HOW: Use the product or prototype you are designing. ',
contentB13: 'WHY: Trying the product being designed prompts the team to appreciate the experience the actual users might have.', 
foot13: 'By wearing a prototype medical device throughout their daily activities, the team understood the physical, social, and emotional implications for patients who might use it. '
,cardsymbol13: 'ion-ios7-medkit-outline'
}


  ];
  return {
    all: function() {
    	//console.log(allCards[1].head0);
      return allCards;
    },
    get: function(allCardsId) {
      // Simple index lookup

      return allCards[allCardsId];
    }
  }

})

.factory('cardService2', function() {
	
});





