-- 年度（4月始まり）で研究室の年数を計算する
return {
  ["lab-year"] = function(args, kwargs)
    local start = tonumber(pandoc.utils.stringify(kwargs["start"])) or 2013
    local d = os.date("*t")
    -- 1〜3月は前年度として扱う
    local fiscal_year = d.year - ((d.month < 4) and 1 or 0)
    return pandoc.Str(tostring(fiscal_year - start + 1))
  end
}