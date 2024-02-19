// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Kakao({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'kakao') {
        // 카카오 로그인 성공 시
        return '/login/oauth2/code/kakao';
      }
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.provider === 'kakao' && user) {
        // JWT 토큰에 사용자 정보 추가
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.userId = user.userId;
        token.role = user.role;
      }
      return token;
    },
    async session(session, token) {
      if (token) {
        // 세션에 사용자 정보 추가
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.userId = token.userId;
        session.role = token.role;
      }
      return session;
    },
  },
});
