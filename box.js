const schoolSelect = document.getElementById('school');
const scheduleArea = document.getElementById('schedule-area');

const schedules = {
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "落合校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["Kidsクラス(3歳～年長)17：30〜18：20", "Jrクラス(小学生)18：30〜19：30"],
        "木": ["レッスン休み"],
        "金": ["Kidsクラス(3歳～年長)15：30〜16：20","Jr1クラス(小学生)16：30〜17：30","Jr2クラス(小・中学生)17：40〜18：40","TOPクラス(承認制)18：50〜20：05"],
        "土": ["レッスン休み"],
    },
    "志村校": {
        "月": ["Jrクラス(小学生以上)17：20〜18：20","kidsクラス（3歳～年長）18：30〜19：20"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["kidsクラス（3歳～年長）16：10〜17：00","Jrクラス(小学生)17：10〜18：10","TOPクラス(承認制)18：20〜19：35"],
        "金": ["レッスン休み"],
        "土": ["kidsクラス（3歳～年中）12：10〜13：00","Jr1クラス(年長〜小学生)13：10〜14：10","Jr2クラス(小学生)14：20〜15：20","JAZZクラス(小学生以上)15：40〜16：40","TOPクラス(承認制)16：55〜18：10"],
    },
    "本郷校": {
        "月": ["レッスン休み"],
        "火": ["Jr1クラス（小学生）16：10〜17：10","Jr2クラス(小学生)17：15〜18：15","Jr3クラス(小学生)18：20〜19：20","TOPクラス(承認制)19：30〜20：45"],
        "水": ["kids1クラス(3歳〜年長)16:10〜17:00", "Jrクラス(年長〜小学生)17:10〜18:10","kids2クラス(3歳〜年長)18:20〜19:10"],
        "木": ["Jrクラス(年長〜小学生16：20〜17：20","JAZZクラス(小学生以上)17：30〜18：30"],
        "金": ["kidsクラス（JAZZ・3歳～年長）15：20〜16：10", "Jr1クラス(JAZZ・小学生)16：15〜17：15","Jr2クラス(JAZZ・小学生)17：20〜18：20","TOPクラス(JAZZ・承認制)18：25〜19：40"],
        "土": ["レッスン休み"],
    },
    "谷中校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["kidsクラス（3歳～年長）16：10〜17：00","Jrクラス(小学生)17：10〜18：10","TOPクラス(小学生)18：15〜19：30"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "六本木校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["Jrクラス(小学生以上)17：20〜18：20", "TOPクラス（承認制）18：30〜19：45"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "月島校": {
        "月": ["kidsクラス（3歳～年長）16：10〜17：00","Jrクラス(小学生)17：10〜18：10","BOYZクラス（小学生以上 男子限定）18：20〜19：20"],
        "火": ["レッスン休み"],
        "水": ["Jr1クラス(年長〜小学生)17：00〜18：00","Jr2クラス(年長〜小学生)18：10〜19：10","TOPクラス(承認制)19：15〜20：30"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "狛江校(水)": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["Jr1クラス（小学生）16：00〜17：00", "Jr2クラス(小学生)17：10〜18：10","kidsクラス（3歳～年長）18：20〜19：10","TOPクラス(承認制)19：20〜20：35"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "狛江校(木)": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["Jr1クラス(小学1〜3年生)16：20〜17：20","Jr2クラス(小学生以上)17：30〜18：30"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "国分寺校": {
        "月": ["kidsクラス（3歳～年長）15：30〜16：20","Jrクラス(年長〜小学生)16：25〜17：25","BOYZクラス(小学生以上 男子限定)17：30〜18：30","TOPクラス(承認制)18:35〜19:50※TOPのみ月3回"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "西葛西校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["Jr1クラス(年長〜小学生)17：00〜18：00","Jr2クラス(3年生以上＋経験者)18：10〜19：10"],
        "土": ["レッスン休み"],
    },
    "尾久校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス（3歳～年長）16：10〜17：00", "Jrクラス(小学生)17：10〜18：10","BOYZクラス(小学生以上 男子限定)18：20〜19：20","TOPクラス(承認制)19:25～20:40"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "千代田校": {
        "月": ["kidsクラス（3歳～年長）15：15〜16：05","Jrクラス(小学生1〜4年生)16：15〜17：15","TOPクラス(承認制)17：25〜18：40"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "大崎校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["Jr1クラス(小学生)16：20～17：20", "BOYZクラス(小学生以上 男子限定)17：25～18：25","TOPクラス(承認制)18：30～19：45"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "千住校": {
        "月": ["Jr2クラス(小学1〜3年生)16：20〜17：20","Jr1クラス(小学1〜3年生)17：30〜18：30","kidsクラス(3歳～年長)18：40〜19：30","TOPクラス(承認制)19：35〜20：50"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "大島校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["kidsクラス（3歳～年長）16：20〜17：10", "Jrクラス(小学生)17：20〜18：20","Jr2クラス(小学生)18：25〜19：25","TOPクラス(承認制)19：30～20：45"],
        "土": ["レッスン休み"],
    },
    "赤羽校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["kidsクラス（年中～年長）11：00〜11：50","Jr1クラス(小学1〜3年生)12：30〜13：30","Jr2クラス(小学1〜3年生)13：40〜14：40","Jr3クラス(小学4年生以上)14：50〜15：50","TOPクラス(承認制)16：00〜17：15"],
    },
    "白金校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(年長〜3年生)17：00〜18：00", "kidsクラス（3歳～年長）18：10〜19：00"],
        "土": ["レッスン休み"],
    },
    "恵比寿校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["Jr2クラス(高学年)16：20〜17：20","Jr1クラス（小学生以上）17：25〜18：25","kidsクラス（3歳～年長）18：30〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "東武練馬校": {
        "月": ["レッスン休み"],
        "火": ["レッスン休み"],
        "水": ["レッスン休み"],
        "木": ["レッスン休み"],
        "金": ["レッスン休み"],
        "土": ["【毎週土曜日】月4回クラス","kidsクラス（3歳～年長）9：00〜9：50", "Jrクラス(小学生)9：55〜10：55","TOPクラス(承認制)11：00〜12：15","【第2・3土曜のレッスンスケジュール】"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
    "氷川台校": {
        "月": ["レッスン休み"],
        "火": ["Kidsクラス(3歳～年長/Layla先生)15:40～16:30", "Jr1クラス(小学生以上/Layla先生)16：35〜17：35","Jr2クラス(小学生以上/Layla先生)17：40～18：40","Jr.クラス(小学生/MIHO先生)18：45〜19：45","TOPクラス(承認制/MIHO先生)19：50〜21：05"],
        "水": ["レッスン休み"],
        "木": ["Kidsクラス(3歳～年長)15：15〜16：05","Jr1クラス(小学生以上)16：10〜17：10","Jr2クラス(小学生以上)17：15〜18：15","JAZZクラス(小学生以上)18：20〜19：20"],
        "金": ["レッスン休み"],
        "土": ["レッスン休み"],
    },
    "志村坂上校": {
        "月": ["レッスン休み"],
        "火": ["kidsクラス(3歳〜年長)16:10〜17:00", "Jr1クラス(小学1年生〜3年生)17:10〜18:10","Jr2クラス(小学3年生〜)18:20〜19:20"],
        "水": ["Jrクラス(小学生以上)16：10〜17：10", "JAZZクラス(入門レベル)17：20〜18：20","kidsクラス(3歳〜年長)18：30〜19：20","K-POP完コピ(初級レベル)19：30〜20：30"],
        "木": ["レッスン休み"],
        "金": ["Jrクラス(小学生以上)18：20〜19：20", "HOUSEクラス(入門レベル)19：30〜20：30"],
        "土": ["kidsクラス(3歳〜年長)12：30〜13：20", "Jrクラス(小学生以上)13：30〜14：30"],
    },
};

schoolSelect.addEventListener('change', () => {
    const selectedSchool = schoolSelect.value;

    // スケジュールエリアを空にする
    scheduleArea.innerHTML = '';

    if (selectedSchool) {
        const schoolSchedule = schedules[selectedSchool];

        for (const day in schoolSchedule) {
            const daySchedule = schoolSchedule[day];

            const scheduleDay = document.createElement('div');
            scheduleDay.classList.add('schedule-day');
            scheduleDay.dataset.day = day;

            const dayTitle = document.createElement('h3');
            dayTitle.textContent = day + "曜日";
            scheduleDay.appendChild(dayTitle);

            const scheduleList = document.createElement('ul');
            scheduleList.classList.add('schedule-list');

            daySchedule.forEach(item => {
                const scheduleItem = document.createElement('li');
                scheduleItem.textContent = item;
                scheduleList.appendChild(scheduleItem);
            });

            scheduleDay.appendChild(scheduleList);
            scheduleArea.appendChild(scheduleDay);
        }
    }
});