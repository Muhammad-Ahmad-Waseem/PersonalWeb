import {FC, memo} from 'react';

import {PublicationItem} from '../../../data/dataDef';

const PublicationItem: FC<{ item: PublicationItem }> = memo(({item}) => {
    const {title, coauthorsa, mainauthor, coauthorsb, venue, paperlink} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold"><a href={paperlink}> {title}</a></h2>
        <div className="flex items-center justify-center md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{coauthorsa}</span>
          <span className="text-sm font-bold italic sm:flex-none">{mainauthor}</span>
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{coauthorsb}</span>
        </div>
      </div>
      <span className="flex-1 text-sm font-medium sm:flex-none">{venue}</span>
    </div>
  );
});

PublicationItem.displayName = 'PublicationItem';
export default PublicationItem;
