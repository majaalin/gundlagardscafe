export default {
  name: 'hero',
  title: 'hero',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Första helbilden på sidan',
      description:
        'Glöm inte att även gå in på "Edit" och beskriva bilden för bättre tillgänglighet',
      validation: (Rule) =>
        Rule.required().warning(
          'Du måste lägga till en bild för att kunna trycka på "Publish" och publicera dina ändringar.'
        ),
      options: {
        isHighlighted: true,
      },
      fields: [
        {
          title: 'Beskrivande text för huvudbilden',
          name: 'heroImageAlt',
          type: 'string',
          description:
            'Viktigt för sökbarhet och träffar på Google samt tillgänglighet',
          validation: (Rule) =>
            Rule.required().warning(
              'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
            ),
        },
        {
          name: 'heroIcon',
          type: 'image',
          title: 'Ikon ovanför huvudbilden',
          description:
            'Glöm inte att även gå in på "Edit" och beskriva bilden för bättre tillgänglighet',
          fields: [
            {
              title: 'Beskrivande text för iconen.',
              name: 'heroIconAlt',
              description:
                'Viktigt för sökbarhet och träffar på Google samt tillgänglighet',
              type: 'string',
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
            },
          ],
        },
      ],
    },
  ],
};
