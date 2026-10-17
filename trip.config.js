// 출장 관리 (클라우드) 설정 — 공개해도 되는 값만 넣습니다 (publishable 키). Anthropic API 키 같은 비밀은 절대 넣지 마세요.
window.TRIP_CONFIG = {
  supabaseUrl: "https://vowvnkxqzmizicvubipy.supabase.co",
  supabaseKey: "sb_publishable_oAaEyETDjrhxXu8VcWeCBw_BBjeeRwf",
  claudeFunction: "trip-claude",   // Claude 중계 Edge Function 이름
  bucket: "trip-files"             // 증빙 파일 저장소 버킷
};
