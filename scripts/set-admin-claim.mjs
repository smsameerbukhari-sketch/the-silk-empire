import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const [uid, action = 'grant'] = process.argv.slice(2);
if (!uid || !['grant', 'revoke'].includes(action)) {
  console.error('Usage: npm run set-admin -- <FIREBASE_AUTH_UID> [grant|revoke]');
  process.exitCode = 1;
} else {
  initializeApp({
    credential: applicationDefault(),
    projectId: 'the-silk-empire'
  });

  const auth = getAuth();
  const user = await auth.getUser(uid);
  const claims = { ...user.customClaims };

  if (action === 'grant') {
    claims.admin = true;
  } else {
    delete claims.admin;
  }

  await auth.setCustomUserClaims(uid, Object.keys(claims).length ? claims : null);
  console.log(`Admin claim ${action === 'grant' ? 'granted to' : 'revoked from'} ${user.email || uid}.`);
}
