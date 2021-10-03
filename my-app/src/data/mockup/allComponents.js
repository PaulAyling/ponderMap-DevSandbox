// All the components used in any version of any document created by any user
const allComponents = 
{
	1: 
    {
		id: 1,
		url: "tbc",
        all_tags: ["lesiure", "sport", "machines"],
        usersVersion:{
                // userId:{ userId :1, versionId :1}
                        1:{'userId':1,'versionId':1},
                        2:{'userId':2,'versionId':2},
                    },
		versions: 
        {
			1: 
            {
				title: "About Bicycles",
				image_url:
					"https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
				notes: "tbc",
				tags: ["lesiure", "sport"],
			},
			2: 
            {
				title: "About Bicycles2",
				image_url:
					"https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
				notes: "tbc",
				tags: ["lesiure", "machines"],
			},
		}
    },
    2: 
    {
        id: 2,
        url: "https://en.wikipedia.org/wiki/Road_bicycle",
        all_tags: ["road", "sport"],
        usersVersion:{
                    1:{'userId':1,'versionId':1},
                    2:{'userId':2,'versionId':1},
                },
        versions: 
        {
            1: {
                title: "Road Bikes",
                image_url:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg/300px-Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg",
                notes: "Road racing can be fun...",
                tags: ["road", "sport"],
            }
        }
    },
    3: 
    {
        id: 3,
        url: "https://en.wikipedia.org/wiki/Mountain_biking",
        all_tags: ["road", "sport"],
        usersVersion:{
                    1:{'userId':1,'versionId':1},
                    2:{'userId':2,'versionId':1},
                },
        versions: 
        {
            1: {
                title: "Mountain Bikes",
                image_url:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg",
                notes:
                    "Mountain bikeing is more fun and very dangerous, and soo exckting!",
                tags: ["lesiure", "sport", "extreme"],
            },
        },
    }
}

export { allComponents };
