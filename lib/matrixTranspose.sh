c=1
file=$1
num_lines=$(head -1 "$file" | sed 's/[^,]//g' | wc -c)

for ((i=0; i<num_lines; i++)) {
    cut -d, -f$c "$file" | paste -sd ','
    ((c++))
} > $2