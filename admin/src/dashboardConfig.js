export default {
  widgets: [
    {
      name: 'netlify',
      layout: {
        width: 'small',
        height: 'small',
      },
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'mmlinedancing.com',
            apiId: 'ad0271b9-52f7-46b0-b4dc-3862776c1637',
            buildHookId: '5f063d22c040b0cf8aa004ee',
            name: 'mmlinedancing.com',
          },
        ],
      },
    },

    {
      name: 'project-info',
      layout: {
        width: 'large',
        height: 'small',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'small',
      },
    },
    {
      name: 'sanity-tutorials',
      layout: {
        width: 'full',
        height: 'small',
      },
    },
  ],
};
