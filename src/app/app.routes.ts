import { Routes } from '@angular/router';
import { Main } from './main/main';
import { LegalNotice } from './shared/legal-notice/legal-notice';
import { PrivacyPolicy } from './shared/privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: Main },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'privacy-policy', component: PrivacyPolicy }
];
