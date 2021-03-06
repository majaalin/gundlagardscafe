export default {
  name: 'iconLink',
  title: 'Ikon och Länk',
  type: 'array',
  of: [
    {
      name: 'icons',
      title: 'Ikon',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Ikon',
          type: 'image',
          description:
            'Glöm inte att även gå in på "Edit" och beskriva bilden för bättre tillgänglighet',
          fields: [
            {
              title: 'Beskrivande text för ikonen',
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
        {
          name: 'links',
          title: 'Länk',
          type: 'object',
          fieldsets: [{ name: 'iconLink' }],
          fields: [
            {
              name: 'link',
              title: 'Välj en sida',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Evenemang',
                    value: 'evenemang , Evenemang',
                  },
                  {
                    title: 'Frågor och svar',
                    value: 'fragor-svar , Frågor och svar',
                  },
                  {
                    title: 'Hitta hit',
                    value: 'hitta-hit , Hitta hit',
                  },
                  {
                    title: 'Privata event',
                    value: 'privata-event , Privata event',
                  },
                  { title: 'Äta', value: 'ata , Äta' },
                  { title: 'Öppettider', value: 'find-us , Öppettider' },
                ],
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'links.link',
          media: 'image',
        },
        prepare(selection) {
          const { title, media } = selection;
          return {
            title: title.split(', ')[1],
            media: media,
          };
        },
      },
    },
  ],
  validation: (Rule) => [
    Rule.required().min(3).max(4).unique().error('Välj 3-4 st.'),
  ],
};
