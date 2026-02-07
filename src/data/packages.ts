export interface TravelPackage {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    category: 'netflix' | 'kdrama' | 'kpop' | 'food';
    contentSource: string; // e.g., "Single's Inferno", "Squid Game"
    duration: string;
    location: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    highlights: string[];
    itinerary: ItineraryDay[];
    includes: string[];
    excludes: string[];
}

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    spots: Spot[];
}

export interface Spot {
    name: string;
    address: string;
    description: string;
    imageUrl?: string;
    duration?: string;
}

export const travelPackages: TravelPackage[] = [
    {
        id: '1',
        slug: 'singles-inferno-incheon',
        title: '솔로지옥 인페르노 체험',
        subtitle: '사승봉도 섬 & 파라다이스시티 2박3일',
        description: '넷플릭스 인기 예능 "솔로지옥" 촬영지를 직접 방문하세요! 인천 사승봉도 섬의 아름다운 해변과 파라다이스시티 리조트에서 로맨틱한 시간을 보내세요.',
        category: 'netflix',
        contentSource: "Single's Inferno (솔로지옥)",
        duration: '2박 3일',
        location: '인천',
        price: 890000,
        originalPrice: 1190000,
        rating: 4.8,
        reviewCount: 324,
        imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
        highlights: [
            '사승봉도 섬 방문 (인페르노 섬)',
            '파라다이스시티 리조트 숙박',
            '프라이빗 비치 체험',
            '촬영지 포토존 투어',
        ],
        itinerary: [
            {
                day: 1,
                title: '파라다이스시티 도착',
                description: '인천공항 근처 파라다이스시티 리조트 체크인 후 시설 탐방',
                spots: [
                    {
                        name: '파라다이스시티 리조트',
                        address: '인천광역시 중구 영종해안남로321번길 186',
                        description: '솔로지옥 "파라다이스" 촬영지. 럭셔리 리조트에서 특별한 하루를 시작하세요.',
                        duration: '자유시간',
                    },
                ],
            },
            {
                day: 2,
                title: '인페르노 섬 탐험',
                description: '보트를 타고 사승봉도로 이동, 촬영지 투어',
                spots: [
                    {
                        name: '사승봉도 (인페르노 섬)',
                        address: '인천광역시 옹진군',
                        description: '솔로지옥의 상징적인 "인페르노" 섬. 아름다운 모래사장과 해변을 즐기세요.',
                        duration: '6시간',
                    },
                ],
            },
            {
                day: 3,
                title: '마지막 날 & 출발',
                description: '리조트 조식 후 체크아웃',
                spots: [
                    {
                        name: '파라다이스시티 스파',
                        address: '파라다이스시티 내',
                        description: '여행의 마무리는 힐링 스파에서',
                        duration: '2시간',
                    },
                ],
            },
        ],
        includes: ['숙박 2박', '조식 2회', '사승봉도 보트 왕복', '가이드 투어', '여행자 보험'],
        excludes: ['항공권', '개인 경비', '석식'],
    },
    {
        id: '2',
        slug: 'kdrama-seoul-classic',
        title: 'K-드라마 서울 클래식',
        subtitle: '도깨비, 별그대, 이태원클라쓰 촬영지 3박4일',
        description: '한국 드라마의 명장면들이 탄생한 서울의 아이코닉한 장소들을 방문합니다. 도깨비의 북촌, 별그대의 남산타워, 이태원클라쓰의 이태원 거리까지!',
        category: 'kdrama',
        contentSource: 'Goblin, My Love From the Star, Itaewon Class',
        duration: '3박 4일',
        location: '서울',
        price: 1290000,
        originalPrice: 1590000,
        rating: 4.9,
        reviewCount: 512,
        imageUrl: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&h=600&fit=crop',
        highlights: [
            'N서울타워 야경 투어',
            '북촌한옥마을 한복 체험',
            '경복궁 가이드 투어',
            '이태원 맛집 투어',
        ],
        itinerary: [
            {
                day: 1,
                title: '서울 도착 & 명동',
                description: '호텔 체크인 후 명동 탐방',
                spots: [
                    {
                        name: '명동',
                        address: '서울특별시 중구 명동',
                        description: '쇼핑과 길거리 음식의 천국',
                        duration: '4시간',
                    },
                ],
            },
            {
                day: 2,
                title: '도깨비 & 궁궐 투어',
                description: '북촌한옥마을과 경복궁 방문',
                spots: [
                    {
                        name: '북촌한옥마을',
                        address: '서울특별시 종로구 북촌로',
                        description: '도깨비 촬영지, 전통 한옥거리',
                        duration: '3시간',
                    },
                    {
                        name: '경복궁',
                        address: '서울특별시 종로구 사직로 161',
                        description: 'Kingdom, 해를 품은 달 촬영지',
                        duration: '2시간',
                    },
                ],
            },
            {
                day: 3,
                title: 'N서울타워 & 이태원',
                description: '별그대 촬영지와 이태원클라쓰 거리',
                spots: [
                    {
                        name: 'N서울타워',
                        address: '서울특별시 용산구 남산공원길 105',
                        description: '별에서 온 그대, 꽃보다 남자 촬영지',
                        duration: '3시간',
                    },
                    {
                        name: '이태원',
                        address: '서울특별시 용산구 이태원동',
                        description: '이태원클라쓰 단밤 거리 모티브',
                        duration: '3시간',
                    },
                ],
            },
            {
                day: 4,
                title: '한강 & 출발',
                description: '한강공원 산책 후 출발',
                spots: [
                    {
                        name: '여의도 한강공원',
                        address: '서울특별시 영등포구 여의동로 330',
                        description: '역도요정 김복주, 도깨비 촬영지',
                        duration: '2시간',
                    },
                ],
            },
        ],
        includes: ['숙박 3박', '조식 3회', '한복 대여', '경복궁 입장료', '가이드 투어', '여행자 보험'],
        excludes: ['항공권', '개인 경비', '중식/석식'],
    },
    {
        id: '3',
        slug: 'jeju-drama-trail',
        title: '제주 드라마 트레일',
        subtitle: '이상한 변호사 우영우 & 감귤 드라마 2박3일',
        description: '제주도의 아름다운 자연과 함께 인기 드라마 촬영지를 둘러보세요. 우영우의 제주 법원, 감귤 관련 드라마 촬영지를 방문합니다.',
        category: 'kdrama',
        contentSource: 'Extraordinary Attorney Woo, When Life Gives You Tangerines',
        duration: '2박 3일',
        location: '제주',
        price: 990000,
        rating: 4.7,
        reviewCount: 287,
        imageUrl: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&h=600&fit=crop',
        highlights: [
            '우영우 촬영지 투어',
            '감귤밭 체험',
            '제주 올레길 트레킹',
            '성산일출봉 일출',
        ],
        itinerary: [
            {
                day: 1,
                title: '제주 도착 & 동쪽 투어',
                description: '제주공항 도착 후 동쪽 지역 탐방',
                spots: [
                    {
                        name: '성산일출봉',
                        address: '제주특별자치도 서귀포시 성산읍',
                        description: '유네스코 세계자연유산',
                        duration: '2시간',
                    },
                ],
            },
            {
                day: 2,
                title: '드라마 촬영지 투어',
                description: '우영우 및 제주 드라마 촬영지',
                spots: [
                    {
                        name: '제주 법원',
                        address: '제주특별자치도 제주시',
                        description: '이상한 변호사 우영우 촬영지',
                        duration: '1시간',
                    },
                    {
                        name: '감귤밭',
                        address: '제주특별자치도 서귀포시',
                        description: '감귤 따기 체험 포함',
                        duration: '2시간',
                    },
                ],
            },
            {
                day: 3,
                title: '서쪽 투어 & 출발',
                description: '협재해변 방문 후 공항으로',
                spots: [
                    {
                        name: '협재해변',
                        address: '제주특별자치도 제주시 한림읍',
                        description: '에메랄드빛 바다와 하얀 모래',
                        duration: '2시간',
                    },
                ],
            },
        ],
        includes: ['숙박 2박', '조식 2회', '렌터카 (2인 기준)', '입장료', '여행자 보험'],
        excludes: ['항공권', '개인 경비', '유류비'],
    },
    {
        id: '4',
        slug: 'squid-game-adventure',
        title: '오징어 게임 어드벤처',
        subtitle: '촬영지 & 한국 놀이 체험 1박2일',
        description: '전 세계를 강타한 넷플릭스 "오징어 게임" 촬영지를 방문하고, 달고나 만들기, 딱지치기 등 한국 전통 놀이를 직접 체험해보세요!',
        category: 'netflix',
        contentSource: 'Squid Game (오징어게임)',
        duration: '1박 2일',
        location: '서울/인천',
        price: 590000,
        rating: 4.6,
        reviewCount: 428,
        imageUrl: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=600&fit=crop',
        highlights: [
            '월미도 테마파크',
            '달고나 만들기 체험',
            '한국 전통 놀이 체험',
            '인천 차이나타운',
        ],
        itinerary: [
            {
                day: 1,
                title: '인천 투어',
                description: '월미도와 차이나타운 탐방',
                spots: [
                    {
                        name: '월미테마파크',
                        address: '인천광역시 중구 월미문화로 81',
                        description: '오징어게임 촬영 장소',
                        duration: '3시간',
                    },
                    {
                        name: '인천 차이나타운',
                        address: '인천광역시 중구 차이나타운로',
                        description: '짜장면 맛집 투어',
                        duration: '2시간',
                    },
                ],
            },
            {
                day: 2,
                title: '게임 체험 & 서울',
                description: '전통 놀이 체험 후 서울 탐방',
                spots: [
                    {
                        name: '달고나 체험관',
                        address: '서울특별시 종로구',
                        description: '직접 달고나 만들기 체험',
                        duration: '1.5시간',
                    },
                    {
                        name: '북촌 전통 놀이 체험',
                        address: '서울특별시 종로구 북촌로',
                        description: '딱지치기, 공기놀이 체험',
                        duration: '2시간',
                    },
                ],
            },
        ],
        includes: ['숙박 1박', '조식 1회', '체험비 전액', '가이드', '여행자 보험'],
        excludes: ['항공권', '개인 경비', '점심/저녁'],
    },
    {
        id: '5',
        slug: 'culinary-class-wars-tour',
        title: '흑백요리사 미식 투어',
        subtitle: '출연 셰프 레스토랑 3박4일 서울 미식 여행',
        description: '넷플릭스 "흑백요리사: 요리 계급 전쟁"에 출연한 스타 셰프들의 레스토랑을 방문하는 프리미엄 미식 투어입니다. 최현석, 정지선, 권성준 셰프의 시그니처 요리를 맛보세요!',
        category: 'food',
        contentSource: 'Culinary Class Wars (흑백요리사)',
        duration: '3박 4일',
        location: '서울',
        price: 1890000,
        originalPrice: 2290000,
        rating: 4.9,
        reviewCount: 156,
        imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
        highlights: [
            '미슐랭 스타 셰프 레스토랑 5곳 방문',
            '셰프 사인 및 포토타임',
            '시그니처 코스 요리',
            '서울 미식 가이드 동행',
        ],
        itinerary: [
            {
                day: 1,
                title: '강남 파인다이닝',
                description: '최현석 셰프 & 조셉 리저우드 셰프',
                spots: [
                    {
                        name: '쵸이닷 (Choi Dot)',
                        address: '서울 강남구 도산대로 457',
                        description: '최현석 셰프의 시그니처 봉골레 파스타',
                        duration: '2시간',
                    },
                    {
                        name: '에빗 (EVETT)',
                        address: '서울 강남구 도산대로45길 10-5',
                        description: '한국-서양 퓨전 코스 요리',
                        duration: '2시간',
                    },
                ],
            },
            {
                day: 2,
                title: '중식 & 딤섬의 날',
                description: '정지선 셰프 & 여경래 셰프',
                spots: [
                    {
                        name: '티엔미미 (Tian Mi Mi)',
                        address: '서울 서초구 사임당로 143',
                        description: '정지선 셰프의 프리미엄 딤섬, 매운 크림 새우',
                        duration: '2시간',
                    },
                    {
                        name: '홍보각 (Hong Bo Gak)',
                        address: '서울 강남구 봉은사로 130 노보텔',
                        description: '여경래 셰프의 정통 중식',
                        duration: '2시간',
                    },
                ],
            },
            {
                day: 3,
                title: '이탈리안 & 한식',
                description: '권성준 셰프 & 유현수 셰프',
                spots: [
                    {
                        name: '비아 톨레도 파스타 바 (Via Toledo)',
                        address: '서울 강남구',
                        description: '나폴리 맛피아 권성준 셰프의 시칠리아 코스',
                        duration: '2.5시간',
                    },
                    {
                        name: '두레유 (Dureyu)',
                        address: '서울 종로구 가회동',
                        description: '유현수 셰프의 미쉐린 한식 파인다이닝',
                        duration: '2.5시간',
                    },
                ],
            },
            {
                day: 4,
                title: '브런치 & 마무리',
                description: '박준우 셰프 디저트로 마무리',
                spots: [
                    {
                        name: '오쁘띠베르 (Aux Petits Verres)',
                        address: '서울 종로구 자하문로 47-1',
                        description: '파티시에 박준우 셰프의 벨기에 타르트',
                        duration: '1.5시간',
                    },
                ],
            },
        ],
        includes: ['숙박 3박 (5성급 호텔)', '조식 3회', '코스 요리 5회', '미식 가이드', '전용 차량', '여행자 보험'],
        excludes: ['항공권', '개인 경비', '팁', '주류'],
    },
];

export const categories = [
    { id: 'all', label: '전체', icon: '🌏' },
    { id: 'netflix', label: 'Netflix', icon: '📺' },
    { id: 'kdrama', label: 'K-Drama', icon: '🎬' },
    { id: 'food', label: '미식', icon: '🍽️' },
    { id: 'kpop', label: 'K-Pop', icon: '🎤' },
];
