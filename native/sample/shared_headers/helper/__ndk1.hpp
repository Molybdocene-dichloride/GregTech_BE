namespace std {
    namespace __ndk1 {
        template<class T1, class T2> struct pair {
            T1 first;
            T2 second;
            pair();
            pair(const T1& x, const T2& y);
        };
        template<class T> struct less{
            bool operator()( const T& lhs, const T& rhs ) const;
        };
        template<typename CharT> class char_traits {};
        template<typename CharT> class allocator {};
        template<typename _CharT, typename _Traits = char_traits<_CharT>, typename _Alloc = allocator<_CharT>> class basic_string {
            _CharT& operator[](std::size_t pos);
            const _CharT* c_str() const noexcept;
        };
        template<class Key, class T, class Compare = less<Key>, class Allocator = allocator<pair<const Key, T> >> class map {
            T& operator[](const Key& key);
            //LegacyBidirectionalIterator begin() noexcept;
            //LegacyBidirectionalIterator end() noexcept;
        };
        template<class T, class Allocator = allocator<T>> class vector {      
            T& operator[](std::size_t pos);
            //LegacyBidirectionalIterator begin() noexcept;
            //LegacyBidirectionalIterator end() noexcept;
        };
        typedef basic_string<char> string;
    }
}