# 출장 관리 (클라우드 버전)

https://kongdang2.github.io/trip/

- 로그인: 통번역 앱과 같은 Supabase 계정(허용 명단 tb_members). 비밀번호 또는 이메일 로그인 링크.
- 출장 데이터는 Supabase `trips` 표에, 증빙 파일은 `trip-files` 저장소에 본인만 볼 수 있게 저장됩니다. PC·휴대폰 어디서 고쳐도 같은 내용이 보입니다.
- AI 기능(계획 만들기·탭별 프롬프트)은 Edge Function `trip-claude`가 중계하므로 브라우저에 Anthropic 키를 넣지 않습니다.
- `trip.config.js`에는 공개 가능한 publishable 키만 둡니다. 비밀 키는 절대 넣지 마세요.
- 서버 설정 파일(SQL, Edge Function 코드)은 출장관리 폴더의 `클라우드/supabase/`에 있습니다.
