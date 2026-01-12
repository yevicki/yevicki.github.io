import { Fragment } from 'react';
import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { SanitizedGithub, SanitizedSocial, SanitizedHeaderImage } from '../../interfaces/sanitized-config';
import LazyImage from '../lazy-image';
import { skeleton } from '../../utils';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { CgDribbble } from 'react-icons/cg';
import {
  FaBehanceSquare,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaLinkedin,
  FaMastodon,
  FaReddit,
  FaSkype,
  FaStackOverflow,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import { RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { SiTwitter, SiUdemy } from 'react-icons/si';

type Props = {
  profile: Profile | null;
  loading: boolean;
  github: SanitizedGithub;
  social: SanitizedSocial;
  headerImage?: SanitizedHeaderImage;
  resumeFileUrl?: string;
  avatarRing: boolean;
};



const getFormattedMastodonValue = (
  mastodonValue: string,
  isLink: boolean,
): string => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  link?: string;
  skeleton?: boolean;
}> = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <div className="flex justify-start py-2 px-1 items-center">
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {icon} {title}
      </div>
      <div
        className={`${skeleton ? 'flex-grow' : ''} text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex justify-start py-2 px-1 items-center"
        >
          {value}
        </a>
      </div>
    </div>
  );
};



const ProfileCard = ({ profile, loading, github, social, headerImage, resumeFileUrl, avatarRing }: Props) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ widthCls: 'w-4', heightCls: 'h-4' })}
          title={skeleton({ widthCls: 'w-24', heightCls: 'h-4' })}
          value={skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
        />,
      );
    }

    return array;
  };

  const bgHeight = headerImage?.height || '140px';

  return (
    <div className="card shadow-lg compact bg-base-100 overflow-visible">
      {headerImage?.display && headerImage?.imageURL && (
        <div
          className="w-full rounded-t-box overflow-hidden"
          style={{
            backgroundImage: `url(${headerImage.imageURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: bgHeight,
          }}
          aria-hidden="true"
        />
      )}

      <div className="grid place-items-center -mt-6 pb-6 pt-6 px-6">
        {loading || !profile ? (
          <div className="avatar opacity-90 relative z-10">
            <div className="mb-4 rounded-full w-32 h-32">
              {skeleton({ widthCls: 'w-full', heightCls: 'h-full', shape: '' })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90 relative z-10">
            <div className={`mb-4 rounded-full w-32 h-32 ${avatarRing ? 'ring ring-primary ring-offset-base-100 ring-offset-2' : ''}`}>
              <LazyImage
                className="w-full h-full object-cover rounded-full"
                src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                alt={profile.name}
                placeholder={skeleton({ widthCls: 'w-full', heightCls: 'h-full', shape: '' })}
              />
            </div>
          </div>
        )}

        <div className="text-center mx-auto w-full">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">{profile.name}</span>
            )}
          </h5>
          <div className="mt-2 text-base-content text-opacity-60 font-mono text-center">
            {loading || !profile ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' }) : profile.bio}
          </div>

          {resumeFileUrl && (loading ? (
            <div className="mt-4">{skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}</div>
          ) : (
            <a href={resumeFileUrl} target="_blank" className="btn btn-outline btn-sm text-xs mt-4 opacity-50" download rel="noreferrer">Download Resume</a>
          ))}
        </div>
      </div>

      <div className="card-body pt-0">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {/* {profile.location && (
                <ListItem icon={<MdLocationOn />} title="Based in:" value={profile.location} />
              )}

              {profile.company && (
                <OrganizationItem icon={<FaBuilding />} title="Organization:" value={profile.company} link={isCompanyMention(profile.company.trim()) ? companyLink(profile.company.trim()) : undefined} />
              )} */}

              <ListItem icon={<AiFillGithub />} title="GitHub:" value={github.username} link={`https://github.com/${github.username}`} />

              {social?.twitter && (
                <ListItem icon={<SiTwitter />} title="Twitter:" value={social.twitter} link={`https://twitter.com/${social.twitter}`} />
              )}

              {social?.mastodon && (
                <ListItem icon={<FaMastodon />} title="Mastodon:" value={getFormattedMastodonValue(social.mastodon, false)} link={getFormattedMastodonValue(social.mastodon, true)} />
              )}

              {social?.linkedin && (
                <ListItem icon={<FaLinkedin />} title="LinkedIn:" value={social.linkedin} link={`https://www.linkedin.com/in/${social.linkedin}`} />
              )}

              {social?.dribbble && (
                <ListItem icon={<CgDribbble />} title="Dribbble:" value={social.dribbble} link={`https://dribbble.com/${social.dribbble}`} />
              )}

              {social?.behance && (
                <ListItem icon={<FaBehanceSquare />} title="Behance:" value={social.behance} link={`https://www.behance.net/${social.behance}`} />
              )}

              {social?.facebook && (
                <ListItem icon={<FaFacebook />} title="Facebook:" value={social.facebook} link={`https://www.facebook.com/${social.facebook}`} />
              )}

              {social?.instagram && (
                <ListItem icon={<AiFillInstagram />} title="Instagram:" value={social.instagram} link={`https://www.instagram.com/${social.instagram}`} />
              )}

              {social?.reddit && (
                <ListItem icon={<FaReddit />} title="Reddit:" value={social.reddit} link={`https://www.reddit.com/user/${social.reddit}`} />
              )}

              {social?.threads && (
                <ListItem icon={<FaSquareThreads />} title="Threads:" value={social.threads} link={`https://www.threads.net/@${social.threads.replace('@', '')}`} />
              )}

              {social?.youtube && (
                <ListItem icon={<FaYoutube />} title="YouTube:" value={`@${social.youtube}`} link={`https://www.youtube.com/@${social.youtube}`} />
              )}

              {social?.udemy && (
                <ListItem icon={<SiUdemy />} title="Udemy:" value={social.udemy} link={`https://www.udemy.com/user/${social.udemy}`} />
              )}

              {social?.medium && (
                <ListItem icon={<AiFillMediumSquare />} title="Medium:" value={social.medium} link={`https://medium.com/@${social.medium}`} />
              )}

              {social?.dev && (
                <ListItem icon={<FaDev />} title="Dev:" value={social.dev} link={`https://dev.to/${social.dev}`} />
              )}

              {social?.stackoverflow && (
                <ListItem icon={<FaStackOverflow />} title="Stack Overflow:" value={social.stackoverflow.split('/').slice(-1)} link={`https://stackoverflow.com/users/${social.stackoverflow}`} />
              )}

              {social?.website && (
                <ListItem icon={<FaGlobe />} title="Website:" value={social.website.replace('https://', '').replace('http://', '')} link={!social.website.startsWith('http') ? `http://${social.website}` : social.website} />
              )}

              {social?.skype && (
                <ListItem icon={<FaSkype />} title="Skype" value={social.skype} link={`skype:${social.skype}?chat`} />
              )}

              {social?.telegram && (
                <ListItem icon={<FaTelegram />} title="Telegram" value={social.telegram} link={`https://t.me/${social.telegram}`} />
              )}

              {social?.phone && (
                <ListItem icon={<RiPhoneFill />} title="Phone:" value={social.phone} link={`tel:${social.phone}`} />
              )}

              {social?.email && (
                <ListItem icon={<RiMailFill />} title="Email:" value={social.email} link={`mailto:${social.email}`} />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
