import React, { memo } from 'react';
import cn from 'classnames';
import { useTranslation } from '@/controllers/i18n/i18n.hooks/useTranslation';
import { Namespaces } from '@/controllers/i18n/i18n.typedefs';
import { Link } from '@/controllers/i18n/i18n.client';
import { ProfileRoutes } from '@/controllers/router/router.constants';
import buttons from '@/ui/buttons/buttons.module.scss';
import typography from '@/ui/typography/typography.module.scss';
import ConnectProfileActionStyles from '@/components/Profile/ProfilesListModule/CandidateProfilesList/CandidateProfileCard/ConnectProfileAction/ConnectProfileAction.module.scss';

export const CreateRecruiterProfileLink = memo(
  () => {
    const { t } = useTranslation([Namespaces.Profile]);

    return (
      <div className={ConnectProfileActionStyles.actionWrapper}>
        <h3 className={cn('mb-32', typography.accentTitle,
          ConnectProfileActionStyles.actionTitle)}
        >
          {t(`${Namespaces.Profile}:create_recruiter_profile`)}
        </h3>
        <p className={cn(typography.smallText, 'mb-32')}>
          {t(`${Namespaces.Profile}:recruiter_profile_required`)}
        </p>
        <Link href={ProfileRoutes.Recruiter}>
          <a
            className={cn(buttons.primary, 'button-primary')}
          >
            {t(`${Namespaces.Profile}:create_recruiter_profile`)}
          </a>
        </Link>
      </div>
    );
  },
);