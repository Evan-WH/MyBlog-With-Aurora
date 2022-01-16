import { isLinkHttp, removeLeadingSlash, removeEndingSlash, } from '@vuepress/shared';
import { resolveRepoType } from './resolveRepoType';
export const editLinkPatterns = {
    GitHub: ':repo/edit/:branch/:path',
    GitLab: ':repo/-/edit/:branch/:path',
    Gitee: ':repo/edit/:branch/:path',
    Bitbucket: ':repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default',
};
export const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern, }) => {
    const repoType = resolveRepoType(docsRepo);
    let pattern;
    if (editLinkPattern) {
        pattern = editLinkPattern;
    }
    else if (repoType !== null) {
        pattern = editLinkPatterns[repoType];
    }
    if (!pattern)
        return null;
    return pattern
        .replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`)
        .replace(/:branch/, docsBranch)
        .replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
