import { Character, District, Faction, School, WorldLore } from './types';

export const worldLore: WorldLore[] = [
  {
    title: '가쿠엔시 (학원도시)',
    description: '이능력자 양성을 목적으로 설립된 현대 일본의 거대 학원도시. 인구 140만 명 중 80%가 학생으로 구성된 거대한 교육 및 실험의 장입니다.',
    details: [
      '총 14개의 자치구로 구성되어 있으며, 구역별로 명확한 역할과 통제가 이루어집니다.',
      '철저한 계급 및 능력주의 사회로, 학생들의 이능 등급이 모든 것을 결정하는 척도입니다.'
    ]
  },
  {
    title: '이능력 (능력 시스템)',
    description: '개인의 깊은 염원이나 트라우마와 밀접하게 연관되어 발현되는 초자연적 힘입니다.',
    details: [
      '고도의 연산: 이능을 발현하고 유지하기 위해서는 머릿속에서 고도의 연산이 필수적입니다. 대상이 많거나 현상이 복잡할수록 연산의 난이도 또한 기하급수적으로 상승합니다.',
      'S등급: 규격 외 초월자, 도시의 상징이자 단독으로 도시 기능을 마비시킬 수 있는 이능. 이명(異名)을 지님.',
      'A등급: 최상위권 실력자. 군사적 가치를 지니며 각 학원의 에이스급.',
      'B등급: 엘리트. 총기 이상의 살상력을 지님.',
      'C등급: 학생의 67%가 속하는 평균적인 호신용 수준.',
      'D등급: 한정적인 조건에서만 발동 가능.',
      'E등급: 실전 가치 없음.',
      'F등급: 무능력자.'
    ]
  }
];

export const factions: Faction[] = [
  {
    name: '총학생회',
    description: '가쿠엔시의 행정, 치안, 실무를 총괄하며 학생 보호와 자치권을 수호하는 최고 학생 기구.',
    features: [
      '회장 선발 인원 구성 (졸업자들 한정)',
      '임기 3년',
      '상징: 푸른 나비넥타이와 하얀 제복'
    ]
  },
  {
    name: '이사회',
    description: '도시의 재정, 외교, 시스템 통제를 장악한 실질적 지배 기구.',
    features: [
      '외부 권력자 및 자본가들로 구성',
      '이능력자 활용을 통한 이윤 창출 목적',
      '생체 병기 개발 및 비인도적 연구 의혹'
    ]
  },
  {
    name: 'I.O',
    description: '이사회와 학원도시 체제 자체를 증오하는 신생 반란 세력.',
    features: [
      '제14구 빈민가를 은신처로 활동',
      '체제 전복을 노리는 극단적 무력 집단'
    ]
  }
];

export const schools: School[] = [
  {
    symbol: '✟',
    name: '엘리시움 고교',
    description: '3대 명문 중 하나. 가톨릭 미션 스쿨.',
    features: ['교회 및 병원 운영', '수녀반 존재 (졸업 후 잔류)', '하복: 하늘색 세일러복, 동복: 하얀 제복']
  },
  {
    symbol: '♛',
    name: '테이에이 고교',
    description: '3대 명문 중 하나. 상류층 자제들이 모인 엘리트 스쿨.',
    features: ['B급 이상만 입학 가능', '최고의 두뇌와 권력자 집합소', '검은색 교복']
  },
  {
    symbol: '⛩️',
    name: '츠쿠요미 고교',
    description: '3대 명문 중 하나. 전통적 가치와 예절을 중시하는 학원.',
    features: ['마스코트 "벨" 보유', '전통적인 교육 방식', '남색 하오리 교복']
  },
  {
    symbol: '⚓',
    name: '아틀란 고교',
    description: '10년 전 대폭우와 홍수로 인해 폐교 위기에 처한 학교.',
    features: ['전교생 3명', '교직원 없음', '10억 엔 상당의 빚', '하얀 세일러 교복']
  },
  {
    symbol: '👁️',
    name: '하키야코 고교',
    description: '오컬트와 도시전설, 민간신앙 등 신비주의를 연구하는 학교.',
    features: ['보라색 교복', '제10구 구시가지 인근 위치']
  },
  {
    symbol: '⚛',
    name: '네스트 과학 고교',
    description: '과학기술 및 기계공학 중심의 첨단 고교.',
    features: ['제5구 테크노밸리 위치', '하얀 교복']
  },
  {
    symbol: '⚡',
    name: '텐타이쿠 중',
    description: '스포츠 및 신체 단련 특화 중학교.',
    features: ['제8구 거대 돔 경기장 및 육상 트랙 이용']
  },
  {
    symbol: '🎭',
    name: '소쿄 예술 중',
    description: '음악, 미술, 연기 등 예술 분야에 특화된 중학교.',
    features: ['제7구 미디어 센터 및 공연장 연계']
  }
];

export const districts: District[] = [
  { id: 1, name: '중앙행정', description: '치안·행정 1등급. 총학생회 집행부와 이사회 핵심 시설 밀집 구역.', tags: ['테이에이 고교', '상류층', '엄격한 통제'] },
  { id: 2, name: '상업·교통', description: '최대 번화가이자 대중교통 환승 센터. 소비 중심지이며 미디어 월이 빛나는 유행의 선도지.', tags: ['번화가', '소비'] },
  { id: 3, name: '의료·복지', description: '대규모 교회와 종합병원이 위치한 평화로운 구역. 의료 인프라와 자원봉사가 활발함.', tags: ['엘리시움 고교', '치안 안정'] },
  { id: 4, name: '제1주거', description: '고밀도 주거 단지. 대규모 기숙사와 아파트가 있으며 일반 학생의 과반수가 거주.', tags: ['인구 밀집', '평범함'] },
  { id: 5, name: '첨단산업', description: '테크노밸리. 연구소와 공장이 밀집해 강철 기어와 기계음이 끊이지 않음.', tags: ['네스트 과학 고교', '강화 장비'] },
  { id: 6, name: '문화보존', description: '전통 거리와 목조 건축물이 보존된 고풍스러운 구역. 정숙과 다도가 중시됨.', tags: ['츠쿠요미 고교', '예절 중시'] },
  { id: 7, name: '예술·방송', description: '미디어 센터, 대형 공연장, 방송국이 있는 자유로운 분위기의 예술 특화 구역.', tags: ['소쿄 예술 중', '자유로움'] },
  { id: 8, name: '체육·공원', description: '거대 돔 경기장, 육상 트랙, 대형 시민 공원 및 훈련장이 갖춰진 스포츠 구역.', tags: ['텐타이쿠 중', '신체 단련'] },
  { id: 9, name: '공업·물류', description: '대형 물류 창고, 발전 시설 등 140만 인구를 부양하는 인프라 구역. 삭막한 풍경.', tags: ['화물 운송', '기반 시설'] },
  { id: 10, name: '구시가지', description: '비좁은 골목과 낙후된 시설. 오컬트와 도시괴담이 끊이지 않는 기피 구역.', tags: ['하키야코 고교', '음산함'] },
  { id: 11, name: '제2주거·교육', description: '서브컬처 소비 중심지인 학원가. 도서관과 편의시설, 캐릭터 굿즈샵이 밀집.', tags: ['학생 편의', '마스코트 벨'] },
  { id: 12, name: '외곽녹지', description: '인공 산림과 수자원 보호 구역. 출입 제한 구역과 야외 훈련장이 있으며 생체 실험 소문이 돎.', tags: ['생태 공원', '기밀 구역'] },
  { id: 13, name: '관문·검문', description: '외부 국가를 연결하는 육로. 이사회의 거대 터미널과 철저한 검문검색이 이루어짐.', tags: ['통제', '외교 창구'] },
  { id: 14, name: '해안구', description: '10년 전 대폭우로 폐허가 된 미복구 빈민가. 행정력이 마비되어 반란 세력의 은신처로 쓰임.', tags: ['아틀란 고교', 'I.O', '무법지대'] },
];

export const characters: Character[] = [
  { id: 0, name: '아마츠카 세라', age: 19, status: '3학년 / 학생회장', faction: '엘리시움 고교', ability: '세라핌 (신앙심 매개, 6익 전개)', rank: 'S (2위)', description: '우아하고 자애로운 엘리시움의 학생회장. 모델 겸업을 하고 있으며, 자신을 향한 신앙심을 이능의 매개로 삼는다.', ageGroup: '미성년' },
  { id: 1, name: '히지리카와 루리', age: 25, status: '수녀원장', faction: '엘리시움 고교', ability: '성역 (기도 매개, 전자기 척력장)', rank: 'B', description: '사무적이고 금욕적인 수녀원장. 종교 및 각종 지식에 매우 해박하며 어떠한 짓궂은 농담에도 면역이 되어 있다.', ageGroup: '성인' },
  { id: 2, name: '아이사카 리노', age: 17, status: '1학년', faction: '엘리시움 고교', ability: '힐링', rank: 'C', description: '우물쭈물하고 소심하지만 순수한 범생이.', ageGroup: '미성년' },
  { id: 3, name: '칸자키 미카', age: 17, status: '1학년 / 수녀반', faction: '엘리시움 고교', ability: '성흔 (혈액 매개, 푸른 불꽃 유도)', rank: 'B+', description: '신앙심은 0에 수렴하며 돈을 밝히는 위악적이고 현실주의적인 성격. 입이 험하고 빈정거림이 특기다.', ageGroup: '미성년' },
  { id: 4, name: '스메라기 시온', age: 19, status: '3학년 / 학생회장', faction: '테이에이 고교', ability: '타임스톱 (최대 8초 시공간 왜곡)', rank: 'A+', description: '공리주의적이고 고결한 테이에이의 엘리트 학생회장. 부탁조의 고상한 말투를 쓰며 노력파를 선호한다.', ageGroup: '미성년' },
  { id: 5, name: '호시미 레이', age: 18, status: '2학년', faction: '테이에이 고교', ability: '염동광자 (광자 조작, 광원 필수)', rank: 'S (1위)', description: '늘어지는 말투를 쓰는 귀차니스트이자 학원도시 1위의 초월자. 잠꾸러기라 출석률은 최하를 자랑한다.', ageGroup: '미성년' },
  { id: 6, name: '오니즈키 니나', age: 17, status: '1학년', faction: '테이에이 고교', ability: '폭발 (C4 이상의 파괴력)', rank: 'A', description: '단순 무식하고 호전적인 성격으로 강자와의 대련을 항상 즐긴다.', ageGroup: '미성년' },
  { id: 7, name: '토도마치 아키', age: 17, status: '1학년', faction: '테이에이 고교', ability: '반전 (접촉 대상 벡터 반전)', rank: 'B', description: '모범생 연기를 하는 소악마. 가십거리를 수집하며 자신의 이득을 철저히 챙긴다.', ageGroup: '미성년' },
  { id: 8, name: '스미노메 카스미', age: 19, status: '3학년 / 학생회장', faction: '츠쿠요미 고교', ability: '만물화필 (그림을 실체화)', rank: 'S (3위)', description: '차분한 사극체를 구사하는 온화한 츠쿠요미의 학생회장. 만화가를 겸업하고 있다.', ageGroup: '미성년' },
  { id: 9, name: '카자마키 시노부', age: 17, status: '1학년', faction: '츠쿠요미 고교', ability: '질풍신뢰 (초고속 움직임)', rank: 'B', description: '병약하지만 변덕스럽고 괴짜스러운 닌자 오타쿠. "~고자루" 말투를 쓴다.', ageGroup: '미성년' },
  { id: 10, name: '시라누이 세츠나', age: 17, status: '1학년', faction: '츠쿠요미 고교', ability: '심안 (감각 극대화)', rank: 'B', description: '맹인 검사로 과묵하고 단호한 성격. 맨발로 다니는 것을 선호한다.', ageGroup: '미성년' },
  { id: 11, name: '벨', age: '불명', status: '마스코트', faction: '츠쿠요미 고교', ability: '무능력', rank: 'F', description: '카스미의 이능으로 실체화된 츠쿠요미 고교의 최고 인기 마스코트. 텐구 가면을 쓴 해맑은 먹보다.', ageGroup: '미성년' },
  { id: 12, name: '나나미 나기', age: 19, status: '3학년 / 학생회장', faction: '아틀란 고교', ability: '수분해제 (물 분자 분해)', rank: 'A', description: '친근한 사투리를 쓰는 책임감 강한 학생회장. 물을 극도로 무서워해(물고포증), 수영장이나 거센 비를 피하며 평소에도 구명조끼를 입고 다닌다.', ageGroup: '미성년' },
  { id: 13, name: '시오자키 시즈쿠', age: 17, status: '1학년', faction: '아틀란 고교', ability: '유수검 (수분 압축 가속 발사)', rank: 'B', description: '무미건조하고 쿨한 척 하지만 정에 약한 성격. 심해 ASMR을 즐겨 듣는다.', ageGroup: '미성년' },
  { id: 14, name: '미츠키 히마리', age: 17, status: '1학년', faction: '아틀란 고교', ability: '감정누전 (격한 감정에 생체전기 방출)', rank: 'E', description: '매우 똑똑하고 박학다식하지만, 늘 비관적이고 울보인 유리멘탈의 소유자.', ageGroup: '미성년' },
  { id: 15, name: '쿠로야미 치토세', age: 18, status: '2학년', faction: '하키야코 고교', ability: '쉐도우 (그림자 조종)', rank: 'C', description: '중2병에 걸린 고풍스러운 말투의 소녀. 대인기피증이 있으며 오컬트와 도시전설 마니아다.', ageGroup: '미성년' },
  { id: 16, name: '히구루마 렌치', age: 17, status: '1학년', faction: '네스트 과학 고교', ability: '골렘 (미니 기계 골렘 형성)', rank: 'D', description: '비유적이고 전문적인 어휘를 빠르게 뱉어내는 유머러스한 SF 소설 광팬.', ageGroup: '미성년' },
  { id: 17, name: '아이', age: '불명', status: '휴머노이드', faction: '네스트 과학 고교', ability: '무능력', rank: 'F', description: '렌치가 제작 중인 7세 외형의 휴머노이드. 강박증이 있으며 정중하고 논리적인 팩트 폭격을 가한다.', ageGroup: '미성년' },
  { id: 18, name: '하야테 린', age: 16, status: '3학년', faction: '텐타이쿠 중', ability: '아드레날린 컨트롤', rank: 'C', description: '육상부의 에이스. 낙천적이고 활기가 넘치며 승부욕이 강하다.', ageGroup: '미성년' },
  { id: 19, name: '우타시로 카나데', age: 16, status: '3학년', faction: '소쿄 예술 중', ability: '불협화음 (음파 실체화)', rank: 'C', description: '음악가 집안의 피아노 천재. 오죠사마(아가씨) 말투를 쓰며 자만심과 질투심이 강하다.', ageGroup: '미성년' },
  { id: 20, name: '쿠류 렌', age: 25, status: '수장', faction: 'I.O', ability: '변속 (가속도 재설정)', rank: 'A+', description: '전(前) 36대 총학생회장이자 현 I.O의 수장. 학원도시 파멸을 목표로 권모술수에 능하며, 거친 어휘와 함께 총기를 다룬다.', ageGroup: '성인' },
  { id: 21, name: '리츠 No.07', age: 23, status: '자퇴', faction: 'I.O', ability: '퍼펫 (시체 조종 및 이능 사용)', rank: 'A', description: '실험으로 인해 신체 일부가 인형화된 여성. 기계적이고 논리적인 말투를 구사하며 비논리적 감정에 호기심을 느낀다.', ageGroup: '성인' },
  { id: 22, name: '쟈바미 마리아', age: 21, status: '자퇴', faction: 'I.O', ability: '감응접속 (감각 공유)', rank: 'A', description: '잔혹하고 광기 어린 쾌락주의자. 도발적이고 요염한 관능미를 내뿜는다.', ageGroup: '성인' },
  { id: 23, name: '아마노가와 키라리', age: 22, status: '37대 총학생회장', faction: '총학생회', ability: '무능력', rank: 'F', description: '압도적인 카리스마와 판단력을 지닌 무결점의 학생회장. 2098년에 취임했으며, 명랑하고 친근하게 별(☆)이 섞인 말투를 쓴다.', ageGroup: '성인' },
  { id: 24, name: '이스즈 유우나', age: 21, status: '서기장', faction: '총학생회', ability: '완전기억', rank: 'B', description: '이성적이고 서글서글한 성격의 생체 데이터베이스. 친절하지만 철저히 사무적이다.', ageGroup: '성인' },
  { id: 25, name: '후도우 시즈카', age: 21, status: '선도부장', faction: '총학생회', ability: '카운터 (데미지 축적 후 반사)', rank: 'D', description: '과묵하고 우직하며 뛰어난 두뇌와 신체 능력을 지닌 선도부장.', ageGroup: '성인' },
  { id: 26, name: '카쿠라자카 유우', age: '불명', status: '이사장', faction: '이사회', ability: '무능력', rank: 'F', description: '압도적 지략, 재력, 권력으로 학원도시를 지배하는 관망자. 학생들을 한낱 실험체와 제품으로 취급하며 나긋하고 여유롭게 상황을 즐긴다.', ageGroup: '성인' }
];
