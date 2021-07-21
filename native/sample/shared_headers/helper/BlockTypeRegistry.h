#include <memory>
#include <map>
#include <utility>
#include <atomic>
#include <helper\Block.h>
#include <gsl\pointers>

template <typename T> class SharedCounter {
public:
  T *value;
  //std::atomic<int> shared{}, weak{};

   SharedCounter(T *value);

   void addSharedRef();
   bool releaseSharedRef();
   void addWeakRef();
   bool releaseWeakRef();
};

template <typename T> class SharedPtr {
public:
  //SharedCounter<T> *counter;

  SharedPtr(T *inp);
  //template <typename... ps> static SharedPtr make(ps &&... p);
   operator bool() const;
   T &operator*();
   T *operator->();
   T *get() const;
   void reset();
  ~SharedPtr();
};
namespace BlockTypeRegistry {
    static std::map<unsigned int, SharedPtr<BlockLegacy>, std::less<unsigned int>, std::allocator<std::pair<unsigned int const, SharedPtr<BlockLegacy>>>> mBlockLookupMap;
};